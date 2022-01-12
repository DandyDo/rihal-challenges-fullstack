import React from "react";

const Countries = ({ countries, students }) => {
    return (
        <div>
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