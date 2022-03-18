import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProduct = () => {
    const [products,setProducts]=useState([])
    
    useEffect(() =>{ 
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    // console.log(products)
    return (
        <div>
       <h1>All product</h1>
       <div class="row row-cols-1 container mt-3 row-cols-md-3 g-4">
       {
           products.map(product =><SingleProduct product={product} ></SingleProduct>)
       }
           </div>

        </div>
    );
};

export default AllProduct;