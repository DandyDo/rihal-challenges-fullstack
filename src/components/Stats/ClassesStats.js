import React from "react";

const ClassesStats = ({ classes, students }) => {
    // Group the object's key values (for example in case of class_id, 1: 6, 2: 3, 3: 12, ...)
    // then returns an array of values from the object
    const groupObjKeyValue = (studentsKey) => {
        const result = studentsKey.reduce((acc, b) => {
        acc[b] = acc[b] + 1 || 1
        return acc;
        }, {});

        return Object.values(result);
    }

    // Extract the classes IDs only from students
    const studentsClassesKey = students.map(({ class_id }) => (class_id));
    // Get returns an array of values from the object.
    const studentsPerClass = groupObjKeyValue(studentsClassesKey);

    return (
        <div className="bg-dark-gray ma2 br3 pa3 grow bw2 shadow-5">
            <h2># of students per class:</h2>
            {
                classes.map(({ class_name }, i) => {                        
                    return (
                        <div key={i}>{`${class_name}: ${studentsPerClass[i] ? studentsPerClass[i] : 0}`}</div>
                    );
                })
            }
        </div>
    );
}

export default ClassesStats;