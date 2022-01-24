import React from 'react';

const Countries = ({ countries }) => {
  return (
    <div>
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
                <tr key={country.id}>
                  <td>{country.id}</td>
                  <td>{country.country_name}</td>
                </tr>
              );
            })
          }        
        </tbody>
      </table>   
      <div className='pb3 mv4 ba br3 bw1 w-60 center'>
        <h3>Click on a row to modify/delete. Or add a country below:</h3>
        <label htmlFor='country'>Country: </label>
        <input className='ma2' placeholder='Enter country' type='text' id='country' name='country'/>
        <button className='mt3 w-20'>Add</button>
      </div>   
    </div>
  );
}

export default Countries;
