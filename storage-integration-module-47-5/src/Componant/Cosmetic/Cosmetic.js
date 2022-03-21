import React from 'react';

const Cosmetic = (props) => {
    const {name,price}=props.cosmetic
    return (
        <div>
          <h1>Name : {name}</h1>  
          <h3>Price : {price}</h3>  
        </div>
    );
};

export default Cosmetic;