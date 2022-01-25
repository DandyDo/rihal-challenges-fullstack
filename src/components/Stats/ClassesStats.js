import React from "react";

const ClassesStats = ({ classes, students }) => {
    return (
        <div className="bg-dark-gray ma2 br3 pa3 grow bw2 shadow-5">
            <h2># of students per class:</h2>
            {
                classes.map(({ class_name }, i) => {                        
                    return (
                        <div key={class_name}>{`${class_name}: ${students[i+1] ? students[i+1] : 0}`}</div>
                    );
                })
            }
        </div>
    );
}

export default ClassesStats;