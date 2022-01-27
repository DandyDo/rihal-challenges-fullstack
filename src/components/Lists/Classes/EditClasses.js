import React from 'react';

const EditClasses = ({ setClasses, editClass, setEditClass }) => {
    const onClassChange = (event) => {
        setEditClass({...editClass, class_name: event.target.value});
    }

    const onSubmitDelete = () => {
        if (!editClass.id)
            return;

        fetch('https://sleepy-reef-72657.herokuapp.com/classes/' + editClass.id, {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: editClass.id
            })
        })
        .then(setClasses(state => {
            const newState = state.filter(item => item.id !== editClass.id);
            return newState;
        }))
        .then(setEditClass({id: '', class_name: ''}))
        .catch(error => console.log(error));
    }

    const onSubmitUpdate= () => {
        if (!editClass.id || !editClass.class_name)
            return;
        
        fetch('https://sleepy-reef-72657.herokuapp.com/classes/' + editClass.id, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: editClass.id,
                class_name: editClass.class_name
            })
        })
        .then(setClasses(state => {
            const newState = state.map(item => {
                if (item.id === editClass.id) {
                    item.class_name = editClass.class_name
                }
                return item;
            });         
            return newState;
        }))
        .then(setEditClass({id: '', class_name: ''}))
        .catch(error => console.log(error));
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
                <button className='mt3 w-20 bg-red' onClick={onSubmitDelete}>Delete</button>
                <button className='mt3 w-20 bg-dark-green' onClick={onSubmitUpdate}>Update</button>
            </div>
        </div>
    );
};

export default EditClasses;


