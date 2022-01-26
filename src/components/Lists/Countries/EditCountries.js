import React from 'react';

const EditCountries = ({ setCountries, editCountry, setEditCountry}) => {
  const onCountryChange = (event) => {
    setEditCountry({...editCountry, country_name: event.target.value });
  }

  const onSubmitDelete = () => {
    if (!editCountry.id)
        return;

    fetch('http://localhost:3000/countries/' + editCountry.id, {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: editCountry.id
        })
    })
    .then(setCountries(state => {
        const newState = state.filter(item => item.id !== editCountry.id);
        return newState;
    }))
    .then(setEditCountry({id: '', country_name: ''}))
    .catch(error => console.log(error));
  }

  const onSubmitUpdate= () => {
    if (!editCountry.id || !editCountry.country_name)
        return;
    
    fetch('http://localhost:3000/countries/' + editCountry.id, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: editCountry.id,
            country_name: editCountry.country_name
        })
    })
    .then(setCountries(state => {
        const newState = state.map(item => {
            if (item.id === editCountry.id) {
                item.country_name = editCountry.country_name
            }
            return item;
        });         
        return newState;
    }))
    .then(setEditCountry({id: '', country_name: ''}))
    .catch(error => console.log(error));
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
        <button className='mt3 w-20 bg-red' onClick={onSubmitDelete}>Delete</button>
        <button className='mt3 w-20 bg-dark-green' onClick={onSubmitUpdate}>Update</button>
      </div>
    </div>
);
};

export default EditCountries;
