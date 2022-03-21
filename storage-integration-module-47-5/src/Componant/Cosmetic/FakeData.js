import React from 'react';

const FakeData = (props) => {
    const {id,guid,email}=props.data
    return (
        <div style={{border:'5px solid green', padding:'5px',margin:'10px'}}>
            <h1>all fake data</h1>
            <h3>id : {id}</h3>
            <h4>guid : {guid}</h4>
            <h5>Email : {email}</h5>
        </div>
    );
};

export default FakeData;