import React, { useState } from 'react';

const Students = ({ students, setStudents, setEditStudent, setCondition }) => {
  const [classId, setClassId] = useState('');
  const [countryId, setCountryId] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const onClassIdChange = (event) => {
    const input = parseInt(event.target.value);
      
    if (input % 1 === 0) {
      setClassId(input);
    } else {
      setClassId('');
    }
  }

  const onCountryIdChange = (event) => {
    const input = parseInt(event.target.value);
      
    if (input % 1 === 0) {
      setCountryId(input);
    } else {
      setCountryId('');
    }
  }
  
  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  }

  const onSubmitAdd = () => {
    if (!classId || !countryId || !name || !birthdate)
      return;

    fetch('https://sleepy-reef-72657.herokuapp.com/students', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        id: '',
        class_id: classId,
        country_id: countryId,
        name: name,
        birthdate: birthdate
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Either class/country ID don't exist.");
      }
      return response.json();
    })
    .then(student => setStudents(state => [...state, student]))
    .then(() => {
      setClassId('');
      setCountryId('');
      setName('');
      setBirthdate('');
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h2 className='underline'>Students Table</h2>
      <div className='vh-50 center overflow-x-auto overflow-y-auto'>
        <table className='w-75'>
          <thead>
            <tr>
              <th>#</th>
              <th>Class ID</th>
              <th>Country ID</th>
              <th>Student Name</th>
              <th>Birthdate</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map(student => {
                return (
                  <tr key={student.id} onClick={() => { setEditStudent(student); setCondition(true); }}>
                    <td>{student.id}</td>
                    <td>{student.class_id}</td>
                    <td>{student.country_id}</td>
                    <td>{student.name}</td>
                    <td>{student.birthdate}</td>
                  </tr>
                );
              })
            }        
          </tbody>
        </table>  
      </div>
      <div className='pb3 mv4 ba br3 bw1 w-60 center'>
        <h3>Click on a row to modify/delete. Or add a student below:</h3>
        <div className='ma2 flex justify-center'>      
          <label className='pr2 tr w-25' htmlFor='class_name'>Class ID: </label>
          <input 
            className='w-60' 
            placeholder='Enter class ID' 
            type='text' 
            id='class_name' 
            name='class_name'
            value={classId}
            onChange={onClassIdChange}   
          />
        </div>
        <div className='ma2 flex justify-center'>
          <label className='pr2 tr w-25' htmlFor='country'>Country ID: </label>
          <input 
            className='w-60' 
            placeholder='Enter country ID' 
            type='text' id='country' 
            name='country'
            value={countryId}
            onChange={onCountryIdChange}            
          />
        </div>
        <div className='ma2 flex justify-center'>
          <label className='pr2 tr w-25' htmlFor='name'>Name: </label>
          <input 
          className='w-60' 
          placeholder='Enter name' 
          type='text' 
          id='name' 
          name='name'
          value={name}
          onChange={onNameChange} 
        />          
        </div>
        <div className='ma2 flex justify-center'>
          <label className='pr2 tr w-25' htmlFor='birthdate'>Birthdate: </label>
          <input 
            className='w-60' 
            type='date' 
            id='birthdate' 
            name='birthdate'
            value={birthdate}
            onChange={onBirthdateChange} 
          />
        </div>
        <button className='mt2 w-20' onClick={onSubmitAdd}>Add</button>
      </div>
    </div>
  );
}

export default Students;
