import React from 'react';

const Countries = ({ countries }) => {
  return (
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
  );
}

export default Countries;
