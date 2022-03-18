import React from 'react';
import Modals from '../Modals/Modals';

const SingleProduct = (props) => {

    const {image,category,description}=props.product
    return (
        <div>
              
            <div class="col shadow-lg  ">
                <div class="card py-5 px-4 ">
                <img src={image} alt="" width='300px' height='300px' />
                    <div class="card-body">
                     
                        <h5 class="card-title">{category}</h5>
                        <p class="card-text">{description.slice(0,100)}</p>
                    <Modals product={props.product}></Modals>
                        {/* <button class="btn btn-primary">Details</button> */}
                        <button onClick={props.deleteData} class="btn btn-danger mx-3">Delete</button>
                        <button onClick={props.setData} class="btn btn-info ">Card</button>
                   
                    </div>
                </div>
                </div>
              
        </div>
    );
};

export default SingleProduct;