import './App.css';
import React, { useState, useEffect } from 'react';
import Classes from '../components/Classes';

function App() {
  const [students, setStudents] = useState([])
  const [classes, setClasses] = useState({})
  const [countries, setCountries] = useState({})

  // Get students from local db.json (using json-server)
  useEffect(() => {
    fetch('http://localhost:3000/students')
      .then(response => response.json())
      .then(data => {setStudents(data)})
      .catch(err => console.log(err));
  }, [])

  // Get the classes/countries IDs only from students
  const countryOfStudents = students.map(({ country_id }) => (country_id));
  const classOfStudents = students.map(({ class_id }) => (class_id));

  // Group the classes/countries IDs
  const studentsPerCountry = countryOfStudents.reduce((acc, b) => {
    acc[b] = acc[b] + 1 || 1
    return acc;
  }, {});
  const studentsPerClass = classOfStudents.reduce((acc, b) => {
    acc[b] = acc[b] + 1 || 1
    return acc;
  }, {});

  console.log(countryOfStudents);
  console.log(studentsPerCountry);
  console.log(classOfStudents);
  console.log(studentsPerClass);

  return (
    <div className="App">
      <Classes />
    </div>
  );
}

export default App;
