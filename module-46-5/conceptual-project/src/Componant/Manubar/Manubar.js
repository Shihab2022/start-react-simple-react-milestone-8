import React from 'react';
import './Manubar.css'
const Manubar = (props) => {
    // console.log(props.count);
    return (
        <div>
            <div className="row container my-3">
            <div className="col-md-2 fs-3">LOGO</div>
            <div className="col-md-10 d-flex justify-content-end nav-bar">
                <li className="btn me-4">Home</li>
                <li className="btn me-4">Conect</li>
                <li className="btn me-4">Card 
                <span className="ms-2 text-danger"> {props.count}</span></li>
                <li className="btn ">Login</li>
            </div>
            </div>
        
        </div>
    );
};

export default Manubar;