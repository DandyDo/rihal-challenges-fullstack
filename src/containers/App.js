import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Classes from '../components/Classes';
import Countries from '../components/Countries';
import Students from '../components/Students';

function App() {
  const [students, setStudents] = useState([])
  const [classes, setClasses] = useState({})
  const [countries, setCountries] = useState({})

  // Get the required data from local db.json (using json-server)
  useEffect(() => {
    fetch('http://localhost:3000/students')
      .then(response => response.json())
      .then(data => {setStudents(data)})
      .catch(err => console.log(err));
      
    fetch('http://localhost:3000/classes')
      .then(response => response.json())
      .then(data => {setClasses(data)})
      .catch(err => console.log(err));

    fetch('http://localhost:3000/countries')
      .then(response => response.json())
      .then(data => {setCountries(data)})
      .catch(err => console.log(err));
  }, [])

  // Group the object's key values (for example in case of classes_id, 1: 6, 2: 3, 3: 12, ...)
  const groupObjKeyValue = (studentsKey) => {
    const result = studentsKey.reduce((acc, b) => {
      acc[b] = acc[b] + 1 || 1
      return acc;
    }, {});

    return result;
  }

  // Convert birthdate to  age from passed input (yyyy-mm-dd)
  const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  // Extract the birdates, then find the average age of students
  const avgAge = students.map(({ birthdate }) => {
    return getAge((birthdate));
  }).reduce((sum, age) => { 
    return (sum + age / students.length) 
  }, 0).toFixed(2);  

  // Extract the classes/countries IDs only from students
  const studentsCountryKey = students.map(({ country_id }) => (country_id));
  const studentsClassesKey = students.map(({ class_id }) => (class_id));
  const studentsPerCountry = groupObjKeyValue(studentsCountryKey);
  const studentsPerClass = groupObjKeyValue(studentsClassesKey);

  // Check if data has been fetched then display info, if not then display 'LOADING...'
  if (!students.length || !Object.keys(classes).length || !Object.keys(countries).length) {
    return <h1 className="pa6 mv7 tc pv3 mv2">LOADING...</h1>;
  }
  else {
    return (
        <div className="tc pv3 mv2 ba br3 bw2">
          <Header/>
          <h2>{`There is a total of ${students.length} students.`}</h2>
          <Students avgAge={ avgAge }/>
          <div className="dt center ma1">
            <Classes classes={ classes } students ={ studentsPerClass }/>
            <Countries countries={ countries } students ={ studentsPerCountry }/>
          </div>
      </div>
    );
  }
}

export default App;
