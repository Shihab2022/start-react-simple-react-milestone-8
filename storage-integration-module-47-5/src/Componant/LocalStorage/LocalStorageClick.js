import React, { useEffect, useState } from 'react';
import LocalStorage from './LocalStorage';
import './LocalStorageClick.css'

const LocalStorageClick = () => {
const [detiles,setDetailes]=useState([])

useEffect(() => {
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setDetailes(data))
},[])

    return (
        <div>
            <h1>local storage</h1>

            <div className='addGrid'>
                    {
                detiles.map(data=>  <LocalStorage data={data}></LocalStorage>)   
                    }                                                                                      
            </div>      
        </div>
    );
};

export default LocalStorageClick;