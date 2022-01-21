import React from "react";

const Countries = ({ countries, students }) => {
    return (
        <div className="bg-dark-gray ma2 br3 pa3 grow bw2 shadow-5">
            <h2># of students per country:</h2>
            {
                countries.country_name.map((country, i) => {                        
                    return (
                        <p key={country}>{`${country}: ${students[i+1]}`}</p>
                    );
                })
            }
        </div>
    );
}

export default Countries;