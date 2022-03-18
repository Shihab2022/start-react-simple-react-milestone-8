import React, { useState } from 'react';
import Manubar from '../Manubar/Manubar';

const SingleProduct = (props) => {
const [count,setCount]= useState(0)
const setData =()=>setCount(count+1)
    const {image,category,description}=props.product
    return (
        <div>
              
            <div class="col shadow-lg ">
                <div class="card py-5 px-4">
                <img src={image} alt="" width='350px' height='400px' />
                    <div class="card-body">
                     
                        <h5 class="card-title">{category}</h5>
                        <p class="card-text">{description.slice(0,100)}</p>

                        <button class="btn btn-primary">Details</button>
                        <button class="btn btn-danger mx-3">Delete</button>
                        <button onClick={setData} class="btn btn-info ">Card</button>
                   
                    </div>
                </div>
                </div>
                <Manubar count={count}></Manubar>
        </div>
    );
};

export default SingleProduct;