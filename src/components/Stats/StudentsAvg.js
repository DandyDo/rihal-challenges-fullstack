import React from "react";

const StudentsAvg = ({ students }) => {
    // Convert birthdate to age from passed input (yyyy-mm-dd)
    const getAge = (dateString) => {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Extract the birdates, then find the average age of students
    const avgAge = students.map(({ birthdate }) => {
        return getAge((birthdate));
    }).reduce((sum, age) => { 
        return (sum + age / students.length) 
    }, 0).toFixed(2);  
    
    return (
        <div className="tc bg-dark-gray dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>Average age of students: {avgAge}</h2>
        </div>
    );   
}

export default StudentsAvg;