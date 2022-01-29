import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import StudentsAvg from '../components/Stats/StudentsAvg'; 
import CountriesStats from '../components/Stats/CountriesStats';
import ClassesStats from '../components/Stats/ClassesStats';
import Dialogue from '../components/Lists/Dialogue';
import Students from '../components/Lists/Students/Students';
import Countries from '../components/Lists/Countries/Countries';
import Classes from '../components/Lists/Classes/Classes';
import EditClasses from '../components/Lists/Classes/EditClasses';
import EditCountries from '../components/Lists/Countries/EditCountries';
import EditStudents from '../components/Lists/Students/EditStudents';

function App() {
  const [students, setStudents] = useState([])
  const [classes, setClasses] = useState([])
  const [countries, setCountries] = useState([])
  const [editClass, setEditClass] = useState({})
  const [editCountry, setEditCountry] = useState({})
  const [editStudent, setEditStudent] = useState({})

  // The following states are for Dialogue.js
  const [classCond, setClassCond] = useState(false)
  const [countryCond, setCountryCond] = useState(false)
  const [studentCond, setStudentCond] = useState(false)
  const [editClassCond, setEditClassCond] = useState(false)
  const [editCountryCond, setEditCountryCond] = useState(false) 
  const [editStudentCond, setEditStudentCond] = useState(false)

  // Get the required data from local db.json (using json-server)
  useEffect(() => {
    fetch('https://sleepy-reef-72657.herokuapp.com/students')
      .then(response => response.json())
      .then(data => {setStudents(data)})
      .catch(err => console.log(err));
      
    fetch('https://sleepy-reef-72657.herokuapp.com/classes')
      .then(response => response.json())
      .then(data => {setClasses(data)})
      .catch(err => console.log(err));

    fetch('https://sleepy-reef-72657.herokuapp.com/countries')
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

  // Convert birthdate to age from passed input (yyyy-mm-dd)
  const getAge = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
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
  if (!students.length || !classes.length || !countries.length) {
    return <h1 className="pa6 mv7 tc pv3 mv2">LOADING...</h1>;
  }
  else {
    return (
        <div className="tc pv3 mv2 ba br3 bw2 w-85 center">
          <div>
            <Header/>
            <h2>{`There is a total of ${students.length} students.`}</h2> 
            <StudentsAvg avgAge={ avgAge }/>
          </div>
          <div className="flex flex-wrap justify-around w-70 center">
            <ClassesStats classes={ classes } students ={ studentsPerClass }/>
            <CountriesStats countries={ countries } students ={ studentsPerCountry }/>
          </div>
          <div className="flex flex-wrap justify-around mt3 w-50 center">
            <button onClick={() => { setClassCond(true) }}>View Classes</button>
            <button onClick={() => { setStudentCond(true) }}>View Students</button>
            <button onClick={() => { setCountryCond(true) }}>View Countries</button>
            {/* Below are hidden dialogues that get triggered by the three buttons above. */}
            <Dialogue condition={ classCond } setCondition={ setClassCond }>
              <Classes classes={ classes } setClasses={ setClasses } setEditClass={ setEditClass } setCondition={ setEditClassCond }/>
              <Dialogue condition={ editClassCond } setCondition={ setEditClassCond }>
                  <EditClasses setClasses={ setClasses } editClass={ editClass } setEditClass={ setEditClass }/>
              </Dialogue>
            </Dialogue>
            <Dialogue condition={ countryCond } setCondition={ setCountryCond }>
              <Countries countries={ countries } setCountries={ setCountries } setEditCountry={ setEditCountry } setCondition={ setEditCountryCond }/>
              <Dialogue condition={ editCountryCond } setCondition={ setEditCountryCond }>
                  <EditCountries setCountries={ setCountries } editCountry={ editCountry } setEditCountry={ setEditCountry }/>
              </Dialogue>
            </Dialogue>
            <Dialogue condition={ studentCond } setCondition={ setStudentCond }>
              <Students students={ students } setStudents={ setStudents } setEditStudent={ setEditStudent } setCondition={ setEditStudentCond }/>
              <Dialogue condition={ editStudentCond } setCondition={ setEditStudentCond }>
                  <EditStudents setStudents={ setStudents } editStudent={ editStudent } setEditStudent={ setEditStudent }/>
              </Dialogue>
            </Dialogue>
          </div>
      </div>
    );
  }
}

export default App;
