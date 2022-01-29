import React from "react";

const CountriesStats = ({ countries, students }) => {
    // Group the object's key values (for example in case of country_id, 1: 6, 2: 3, 3: 12, ...)
    // then returns an array of values from the object
    const groupObjKeyValue = (studentsKey) => {
        const result = studentsKey.reduce((acc, b) => {
        acc[b] = acc[b] + 1 || 1
        return acc;
        }, {});

        return Object.values(result);
    }
    
    // Extract the countries IDs only from students
    const studentsCountryKey = students.map(({ country_id }) => (country_id));
    // Get returns an array of values from the object.
    const studentsPerCountry = groupObjKeyValue(studentsCountryKey);

    return (
        <div className="bg-dark-gray ma2 br3 pa3 grow bw2 shadow-5">
            <h2># of students per country:</h2>
            {
                countries.map(({ country_name }, i) => {                        
                    return (
                        <p key={i}>{`${country_name}: ${studentsPerCountry[i] ? studentsPerCountry[i] : 0}`}</p>
                    );
                })
            }
        </div>
    );
}

export default CountriesStats;