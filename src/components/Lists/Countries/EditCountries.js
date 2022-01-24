import React from 'react';

const EditCountries = () => {
  return (
    <div className='pb3 mv4 ba br3 bw1 w-60 center'>
      <h3>Edit the selected class row below:</h3>
      <div className='ma2 flex justify-center'>                
          <label className='pr2 tr w-25' htmlFor='id'>Country ID: </label>
          <input disabled className='w-60 bg-black-30' placeholder='Country ID' type='text' id='id' name='id'/>
      </div>
      <div className='ma2 flex justify-center'>
          <label className='pr2 tr w-25' htmlFor='country'>Country: </label>
          <input className='w-60' placeholder='Enter country' type='text' id='country' name='country'/>
      </div>
      <div className='ma2 flex justify-around'>
        <button className='mt3 w-20 bg-red'>Delete</button>
        <button className='mt3 w-20 bg-dark-green'>Update</button>
      </div>
    </div>
);
};

export default EditCountries;
