import React from 'react';

const Students = ({ students }) => {
  return (
    <div>
      <h2 className='underline'>Students Table</h2>
      <div className='vh-75 center overflow-x-auto overflow-y-auto'>
        <table className='w-75'>
          <thead>
            <tr>
              <th>#</th>
              <th>Class ID</th>
              <th>Course ID</th>
              <th>Student Name</th>
              <th>Birthdate</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map(student => {
                return (
                  <tr key={student.id}>
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
          <label className='pr2 tr w-25' htmlFor='class_name'>Class name: </label>
          <input className='w-60' placeholder='Enter class' type='text' id='class_name' name='class_name'/>
        </div>
        <div className='ma2 flex justify-center'>
          <label className='pr2 tr w-25' htmlFor='country'>Country: </label>
          <input className='w-60' placeholder='Enter country' type='text' id='country' name='country'/>
        </div>
        <div className='ma2 flex justify-center'>
          <label className='pr2 tr w-25' htmlFor='name'>Name: </label>
          <input className='w-60' placeholder='Enter name' type='text' id='name' name='name'/>          
        </div>
        <div className='ma2 flex justify-center'>
          <label className='pr2 tr w-25' htmlFor='birthdate'>Birthdate: </label>
          <input className='w-60' type='date' id='birthdate' name='birthdate'/>
        </div>
        <button className='mt2 w-20'>Add</button>
      </div>
    </div>
  );
}

export default Students;
