import React from 'react';

const Cosmetic = (props) => {
    const {name,price}=props.cosmetic
    return (
        <div style={{border:'5px solid red', padding:'5px',margin:'10px'}}>
          <h1>Name : {name}</h1>  
          <h3>Price : {price}</h3>  
        </div>
    );
};

export default Cosmetic;