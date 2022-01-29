import React from 'react';

const EditStudents = ({ setStudents, editStudent, setEditStudent }) => {
  const onStudentClassChange = (event) => {
    const input = parseInt(event.target.value);

    if (input % 1 === 0) {
      setEditStudent({...editStudent, class_id: input})
    } else {
      setEditStudent({...editStudent, class_id: ''});
    }
  }

  const onStudentCountryChange = (event) => {
    const input = parseInt(event.target.value);

    if (input % 1 === 0) {
      setEditStudent({...editStudent, country_id: input})
    } else {
      setEditStudent({...editStudent, country_id: ''});
    }
  }

  const onStudentNameChange = (event) => {
    setEditStudent({...editStudent, name: event.target.value})
  }

  const onStudentBirthChange = (event) => {
    setEditStudent({...editStudent, birthdate: event.target.value})
  }
  
  const onSubmitDelete = () => {
    if (!editStudent.id)
        return;

    fetch('https://sleepy-reef-72657.herokuapp.com/students/' + editStudent.id, {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: editStudent.id
        })
    })
    .then(setStudents(state => {
        const newState = state.filter(item => item.id !== editStudent.id);
        return newState;
    }))
    .then(setEditStudent({
      id: '',
      class_id: '',
      country_id: '',
      name: '',
      birthdate: ''
    }))
    .catch(error => console.log(error));
  }

  const onSubmitUpdate= () => {
    if (!editStudent.id || !editStudent.class_id || !editStudent.country_id || !editStudent.name || !editStudent.birthdate )
        return;
    
    fetch('https://sleepy-reef-72657.herokuapp.com/students/' + editStudent.id, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: editStudent.id,
          class_id: editStudent.class_id,
          country_id: editStudent.country_id,
          name: editStudent.name,
          birthdate: editStudent.birthdate
        })
    })
    .then(response => {
      if (!response.ok) {
          throw new Error("Cannot add a non-existent IDs.");
      }
      setStudents(state => {
        const newState = state.map(item => {
            if (item.id === editStudent.id) {
              item.class_id = editStudent.class_id;
              item.country_id = editStudent.country_id;
              item.name = editStudent.name;
              item.birthdate = editStudent.birthdate;
            }
            return item;
        });         
        return newState;
      });
      setEditStudent({
        id: '',
        class_id: '',
        country_id: '',
        name: '',
        birthdate: ''
      });
    })
    .catch(error => console.log(error));
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
        <button className='mt3 w-20 bg-red' onClick={onSubmitDelete}>Delete</button>
        <button className='mt3 w-20 bg-dark-green' onClick={onSubmitUpdate}>Update</button>
      </div>
    </div>
);
};

export default EditStudents;
