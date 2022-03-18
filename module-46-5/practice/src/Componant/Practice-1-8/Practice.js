import React, { useState } from 'react';
import './Practice.css'

const Practice = () => {

    const [grap,setgrap]= useState(100)
    const buttonClickDown=()=>setgrap(grap-10)
    const buttonClickUp=()=>setgrap(grap+10)
    return (
        <div className='my-5 '>
            
                        {/* number-2  */}
                        {/* <div className="number2-5">
                        <h1>start react </h1>
                    <p>I am a student . I read in Honuse 2nd year at Rajsahi University.</p>
                    <article>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </article>
                        </div> */}
                 
            
            {/* chalnging part 9 and 10 */}

            {/* <div className='d-flex justify-content-center  my-3'>
            <div className='grap'></div>
            <p className='ms-3'>{grap}%</p>
            </div> */}

        <ShowGrapDown grap={grap}></ShowGrapDown>
            
<button onClick={buttonClickDown} className='btn btn-danger shadow-lg'>Battery down</button>
<button onClick={buttonClickUp} className='btn btn-info ms-3 shadow-lg'>Battery up</button>
        </div>


    );
};

function ShowGrapDown(props){
if(props.grap <0 || props.grap >100){
    // alert('Battery charge can not smaller than 10')
    return(
        <h4 style={{color:'red',}} className='my-3 fs-2'>Battery charge can not smaller than 0 or bigger than 100 !!!!!!</h4>
    )
    
  
}
    return(     
<div className='d-flex justify-content-center  my-3 '>
            <div style={{height: props.grap }} className='grap'></div>        
   <p  className='ms-3'>{props.grap}%</p>     
            </div>        
    )  
}

export default Practice;