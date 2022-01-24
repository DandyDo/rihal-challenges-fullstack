import React from 'react';

const Classes = ({ classes, setEditClass, setCondition }) => {
  return (
    <div>
      <h2 className='underline'>Classes Table</h2>
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
      <div className='pb3 mv4 ba br3 bw1 w-60 center'>
        <h3>Click on a row to modify/delete. Or add a class below:</h3>
        <label htmlFor='class_name'>Class name: </label>
        <input className='ma2' placeholder='Enter class' type='text' id='class_name' name='class_name'/>
        <button className='mt3 w-20'>Add</button>
      </div>
    </div>
  );
}

export default Classes;
