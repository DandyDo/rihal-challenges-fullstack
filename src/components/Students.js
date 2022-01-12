import React from "react";

const Students = ({ avgAge }) => {
    return (
        <div className="tc bg-dark-gray dib br3 pa3 ma2 grow bw2 shadow-5">
            <h2>Average age of students: {avgAge}</h2>
        </div>
    );   
}

export default Students;