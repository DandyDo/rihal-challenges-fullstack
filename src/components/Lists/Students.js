import React from 'react';

const Students = ({ students }) => {
  return (
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
        students.map(course => {
          return (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.class_id}</td>
              <td>{course.country_id}</td>
              <td>{course.name}</td>
              <td>{course.birthdate}</td>
            </tr>
          );
        })
      }        
    </tbody>
  </table>
  );
}

export default Students;
