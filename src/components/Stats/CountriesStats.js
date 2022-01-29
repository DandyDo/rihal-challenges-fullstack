import React from "react";

const CountriesStats = ({ countries, students }) => {
    return (
        <div className="bg-dark-gray ma2 br3 pa3 grow bw2 shadow-5">
            <h2># of students per country:</h2>
            {
                countries.map(({ country_name }, i) => {                        
                    return (
                        <p key={i}>{`${country_name}: ${students[i+1] ? students[i+1] : 0}`}</p>
                    );
                })
            }
        </div>
    );
}

export default CountriesStats;