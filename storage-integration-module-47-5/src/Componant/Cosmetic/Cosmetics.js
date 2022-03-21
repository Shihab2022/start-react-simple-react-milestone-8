import React from 'react';
import Cosmetic from './Cosmetic';

const Cosmetics = () => {

    const cosmetics=[
        {id:1, name:'alta', price:1000},
        {id:2,name:'rlta',price:3000},
        {id:3,name:'clta',price:4000},
        {id:4,name:'dlta',price:5000},
        {id:5,name:'elta',price:1000}  
    ]
    return (
        <div>
            <h1>all cosmetics</h1> 
            {

cosmetics.map(cosmetic=> <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)  
            }
        </div>
    );
};

export default Cosmetics;