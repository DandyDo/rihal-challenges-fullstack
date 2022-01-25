import React from 'react';

const EditCountries = ({ editCountry, setEditCountry}) => {
  const onCountryChange = (event) => {
    setEditCountry({...editCountry, country_name: event.target.value });
  }

  return (
    <div className='pb3 mv4 ba br3 bw1 w-60 center'>
      <h3>Edit the selected class row below:</h3>
      <div className='ma2 flex justify-center'>                
          <label className='pr2 tr w-25' htmlFor='id'>Country ID: </label>
          <input 
            disabled 
            className='w-60 bg-black-30' 
            placeholder='Country ID' 
            type='text' 
            id='id' 
            name='id'
            value={ editCountry.id }
          />
      </div>
      <div className='ma2 flex justify-center'>
          <label className='pr2 tr w-25' htmlFor='country'>Country: </label>
          <input 
            className='w-60' 
            placeholder='Enter country' 
            type='text' 
            id='country' 
            name='country'
            value={ editCountry.country_name }
            onChange={ onCountryChange }
          />
      </div>
      <div className='ma2 flex justify-around'>
        <button className='mt3 w-20 bg-red'>Delete</button>
        <button className='mt3 w-20 bg-dark-green'>Update</button>
      </div>
    </div>
);
};

export default EditCountries;
