import React from 'react';

const EditStudents = ({ editStudent, setEditStudent }) => {
  const onStudentClassChange = (event) => {
    setEditStudent({...editStudent, class_id: event.target.value})
  }

  const onStudentCountryChange = (event) => {
    setEditStudent({...editStudent, country_id: event.target.value})
  }

  const onStudentNameChange = (event) => {
    setEditStudent({...editStudent, name: event.target.value})
  }

  const onStudentBirthChange = (event) => {
    setEditStudent({...editStudent, birthdate: event.target.value})
  }

  return (
    <div className='pb3 mv4 ba br3 bw1 w-60 center'>
      <h3>Edit the selected class row below:</h3>
      <div className='ma2 flex justify-center'>                
          <label className='pr2 tr w-25' htmlFor='id'>Student ID: </label>
          <input 
            disabled 
            className='w-60 bg-black-30' 
            placeholder='Student ID' 
            type='text' 
            id='id' 
            name='id'
            value={ editStudent.id }
          />
      </div>
      <div className='ma2 flex justify-center'>      
        <label className='pr2 tr w-25' htmlFor='class_id'>Class ID: </label>
        <input 
          className='w-60' 
          placeholder='Enter class' 
          type='text' 
          id='class_id' 
          name='class_id'
          value={ editStudent.class_id }
          onChange={ onStudentClassChange }
        />
      </div>
      <div className='ma2 flex justify-center'>
        <label className='pr2 tr w-25' htmlFor='country_id'>Country ID: </label>
        <input 
          className='w-60' 
          placeholder='Enter country' 
          type='text' 
          id='country_id' 
          name='country_id'
          value={ editStudent.country_id }
          onChange={ onStudentCountryChange }
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
          value={ editStudent.name }
          onChange={ onStudentNameChange }
        />          
      </div>
      <div className='ma2 flex justify-center'>
        <label className='pr2 tr w-25' htmlFor='birthdate'>Birthdate: </label>
        <input 
          className='w-60' 
          type='date'
          id='birthdate' 
          name='birthdate'
          value={ editStudent.birthdate }
          onChange={ onStudentBirthChange }
        />
      </div>
      <div className='ma2 flex justify-around'>
        <button className='mt3 w-20 bg-red'>Delete</button>
        <button className='mt3 w-20 bg-dark-green'>Update</button>
      </div>
    </div>
);
};

export default EditStudents;
