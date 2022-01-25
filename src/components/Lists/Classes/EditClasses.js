import React from 'react';

const EditClasses = ({ editClass, setEditClass }) => {
    const onClassChange = (event) => {
        setEditClass({...editClass, class_name: event.target.value });
    }

    return (
        <div className='pb3 mv4 ba br3 bw1 w-60 center'>
            <h3>Edit the selected class row below:</h3>
            <div className='ma2 flex justify-center'>                
                <label className='pr2 tr w-25' htmlFor='id'>Class ID: </label>
                <input 
                    disabled 
                    className='w-60 bg-black-30' 
                    placeholder='Class ID' 
                    type='text' 
                    id='id' 
                    name='id' 
                    value={ editClass.id }
                />
            </div>
            <div className='ma2 flex justify-center'>
                <label className='pr2 tr w-25' htmlFor='class_name'>Class name: </label>
                <input 
                    className='w-60' 
                    placeholder='Enter class' 
                    type='text' 
                    id='class_name' 
                    name='class_name'
                    value={ editClass.class_name }
                    onChange={ onClassChange }
                />
            </div>
            <div className='ma2 flex justify-around'>
                <button className='mt3 w-20 bg-red'>Delete</button>
                <button className='mt3 w-20 bg-dark-green'>Update</button>
            </div>
        </div>
    );
};

export default EditClasses;


