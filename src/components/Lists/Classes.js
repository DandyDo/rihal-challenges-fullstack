import React from 'react';

const Classes = ({ classes }) => {
  return (
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
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.class_name}</td>
              </tr>
            );
          })
        }        
      </tbody>
    </table>
  );
}

export default Classes;
