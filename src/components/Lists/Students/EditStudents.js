import React from 'react';

const EditStudents = () => {
  return (
    <div className='pb3 mv4 ba br3 bw1 w-60 center'>
      <h3>Edit the selected class row below:</h3>
      <div className='ma2 flex justify-center'>                
          <label className='pr2 tr w-25' htmlFor='id'>Student ID: </label>
          <input disabled className='w-60 bg-black-30' placeholder='Student ID' type='text' id='id' name='id'/>
      </div>
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
      <div className='ma2 flex justify-around'>
        <button className='mt3 w-20 bg-red'>Delete</button>
        <button className='mt3 w-20 bg-dark-green'>Update</button>
      </div>
    </div>
);
};

export default EditStudents;
