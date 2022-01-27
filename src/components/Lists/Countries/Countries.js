import React, { useState } from 'react';

const Countries = ({ countries, setCountries, setEditCountry, setCondition }) => {
  const [countryName, setCountryName] = useState('');

  const onCountryNameChange = (event) => {
    setCountryName(event.target.value);
  }

  const onSubmitAdd = () => {
    if (!countryName)
      return;

    fetch('https://sleepy-reef-72657.herokuapp.com/countries', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        id: '',
        country_name: countryName })
    })
    .then(response => response.json())
    .then(country => setCountries(state => [...state, country]))
    .then(setCountryName(''))
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h2 className='underline'>Countries Table</h2>
      <div className='vh-50 center overflow-x-auto overflow-y-auto'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {
              countries.map(country => {
                return (
                  <tr key={country.id} onClick={() => { setEditCountry(country); setCondition(true); }}>
                    <td>{country.id}</td>
                    <td>{country.country_name}</td>
                  </tr>
                );
              })
            }        
          </tbody>
        </table> 
      </div>
  
      <div className='pb3 mv4 ba br3 bw1 w-60 center'>
        <h3>Click on a row to modify/delete. Or add a country below:</h3>
        <label htmlFor='country'>Country: </label>
        <input 
          className='ma2' 
          placeholder='Enter country' 
          type='text' 
          id='country' 
          name='country'
          value={countryName}
          onChange={onCountryNameChange}         
        />
        <button className='mt3 w-20' onClick={onSubmitAdd}>Add</button>
      </div>   
    </div>
  );
}

export default Countries;
