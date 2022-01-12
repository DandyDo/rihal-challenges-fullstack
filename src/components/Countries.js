import React from "react";

const Countries = ({ countries, students }) => {
    return (
        <div className="bg-dark-gray dtc br3 pa2 grow bw2 shadow-5">
            <h2># of students per country:</h2>
            <div>
                {
                    countries.country_name.map((country, i) => {                        
                        return (
                            <div key={country}>{`${country}: ${students[i+1]}`}</div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Countries;