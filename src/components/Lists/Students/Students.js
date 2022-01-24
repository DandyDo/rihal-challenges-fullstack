import React from 'react';

const Students = ({ students }) => {
  return (
    <div>
      <table>
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
      <div className='pb3 mv4 ba br3 bw1 w-60 center'>
        <h3>Click on a row to modify/delete. Or add a student below:</h3>
        <div>      
          <label htmlFor='class_name'>Class name: </label>
          <input className='ma1' placeholder='Enter class' type='text' id='class_name' name='class_name'/>
        </div>
        <div>
          <label htmlFor='country'>Country: </label>
          <input className='ma1' placeholder='Enter country' type='text' id='country' name='country'/>
        </div>
        <div>
          <label htmlFor='name'>Name: </label>
          <input className='ma1' placeholder='Enter name' type='text' id='name' name='name'/>          
        </div>
        <div>
          <label htmlFor='birthdate'>Birthdate: </label>
          <input className='ma1' type='date' id='birthdate' name='birthdate'/>
        </div>
        <button className='mt3 w-20'>Add</button>
      </div>
    </div>
  );
}

export default Students;
