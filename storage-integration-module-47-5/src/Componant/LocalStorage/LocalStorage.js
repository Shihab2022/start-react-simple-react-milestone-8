import React from 'react';
import addToLocalStorage from './AddToLocalStorage';


import './LocalStorage.css'

const LocalStorage = (props) => {
    const {name,email,id,phone}=props.data;

    const addToCard =id =>addToLocalStorage(id)
    return (
        <div className='card'>
           <h1>Name :{name}</h1> 
           <h3> Email : {email}</h3>
           <h4> Id : {id}</h4>
           <h5> Phone : {phone}</h5>
           <button onClick={()=>addToCard(id)}>add to card</button>
           <button onClick="">remove from card</button>
        </div>
    );
};

export default LocalStorage;