import React from "react";

const Classes = ({ classes, students }) => {
    return (
        <div className="bg-dark-gray ma2 br3 pa3 grow bw2 shadow-5">
            <h2># of students per class:</h2>
            {
                classes.class_name.map((course, i) => {                        
                    return (
                        <div key={course}>{`${course}: ${students[i+1]}`}</div>
                    );
                })
            }
        </div>
    );
}

export default Classes;