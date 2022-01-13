import React from "react";

const Countries = ({ countries, students }) => {
    return (
        <div className="bg-dark-gray w-45 br3 pa2 ma2 grow bw2 shadow-5">
            <h2># of students per country:</h2>
            {
                countries.country_name.map((country, i) => {                        
                    return (
                        <div key={country}>{`${country}: ${students[i+1]}`}</div>
                    );
                })
            }
        </div>
    );
}

export default Countries;