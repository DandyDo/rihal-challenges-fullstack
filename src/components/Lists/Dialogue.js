import React from 'react';

const Dialogue = (props) => {
  return (props.condition) ? (
        <div className='fixed top-0 left-0 w-100 vh-100 flex justify-center items-center bg-black-50'>
            <div className='relative ma3 pa3 innerDialogue w-90 vh-75 overflow-y-auto'>
                <button className='absolute top-0 right-0 ma2'
                    onClick={ () => {props.setCondition(false)} }>Close
                </button>
                { props.children }                
            </div>
        </div>
    ) : "";
}
export default Dialogue;
