import React from 'react';
import Cosmetic from './Cosmetic';
import FakeData from './FakeData';

const Cosmetics = () => {
// by array
    const cosmetics=[
        {id:1, name:'alta', price:1000},
        {id:2,name:'rlta',price:3000},
        {id:3,name:'clta',price:4000},
        {id:4,name:'dlta',price:5000},
        {id:5,name:'elta',price:1000}  
    ]

    // by fake data

    const fakeAllData =[
        {
          "id": "6238748871f3a70d2f08060f",
          "index": 0,
          "guid": "a61ef881-dae1-4a65-ad1f-3220f345e732",
          "email": "janpacheco@fanfare.com"
        },
        {
          "id": "62387488069b2f8b9418165c",
          "index": 1,
          "guid": "b6761ced-7438-401e-9ea5-db92e9b8e5dd",
          "email": "janpacheco@fanfare.com"
        },
        {
          "id": "623874883ac1e9c28534fa04",
          "index": 2,
          "guid": "439e223b-605c-41e2-b073-b2f54faabe73",
          "email": "janpacheco@fanfare.com"
        },
        {
          "id": "6238748853febe414ba2f2c1",
          "index": 3,
          "guid": "4c72c1c9-1f44-4574-b164-738095abe341",
          "email": "janpacheco@fanfare.com"
        },
        {
          "id": "62387488c929d1cc7303623f",
          "index": 4,
          "guid": "214d5435-34db-4549-bcc2-e48764485a10",
          "email": "janpacheco@fanfare.com"
        },
        {
          "id": "62387488617fa6de72e39ef0",
          "index": 5,
          "guid": "256920df-97c5-4be7-a94e-01d5aaaae067",
          "email": "janpacheco@fanfare.com"
        }
      ]
    return (
        <div>

            <h1>all cosmetics</h1> 
            {/* for array */}
            {
cosmetics.map(cosmetic=> <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)  
            }
{/* for dake data */}
{
    fakeAllData.map(data=><FakeData data={data} key={data.index}></FakeData>)
}
        </div>
    );
};

export default Cosmetics;