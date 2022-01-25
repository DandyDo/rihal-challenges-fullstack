import React, { useState } from 'react';

const Classes = ({ classes, setClasses, setEditClass, setCondition }) => {
  const [className, setClassName] = useState('');

  const onClassNameChange = (event) => {
    setClassName(event.target.value);
  }

  const onSubmitAdd = () => {
    if (className === '')
      return;

    fetch('http://localhost:3000/classes', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        id: '',
        class_name: className })
    })
    .then(response => response.json())
    .then(course => setClasses(state => [...state, course]))
    .then(setClassName(''))
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h2 className='underline'>Classes Table</h2>
      <div className='vh-50 center overflow-x-auto overflow-y-auto'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
            </tr>
          </thead>
          <tbody>
            {
              classes.map(course => {
                return (
                  <tr key={course.id} onClick={() => { setEditClass(course); setCondition(true); }}>
                    <td>{course.id}</td>
                    <td>{course.class_name}</td>
                  </tr>
                );
              })
            }        
          </tbody>
        </table>
      </div>
      <div className='pb3 mv4 ba br3 bw1 w-60 center'>
        <h3>Click on a row to modify/delete. Or add a class below:</h3>
        <label htmlFor='class_name'>Class name: </label>
        <input 
          className='ma2' 
          placeholder='Enter class' 
          type='text' 
          id='class_name' 
          name='class_name'
          value={className}
          onChange={onClassNameChange}
        />
        <button className='mt3 w-20' onClick={onSubmitAdd}>Add</button>
      </div>
    </div>
  );
}

export default Classes;
