import React from 'react';

const Reduce = () => {

    // simple array thaky addition
    const simpleArray =[10 ,30,33,20,40,555,555]
    const subTotal =(previous,current)=>previous+current
    const total=simpleArray.reduce(subTotal,0)

//nasted array of object thay addition
const nastedArray=[
    {
      "id": "6238a752db87a12f1fbda2af",
      "index": 0,
      "balance": 2687
    },
    {
      "id": "6238a7521ea8876e0549b356",
      "index": 1,
      "balance": 3159
    },
    {
      "id": "6238a7523193aaab47e497b1",
      "index": 2,
      "balance": 1233
    },
    {
      "id": "6238a7522e795a4151ee4768",
      "index": 3,
      "balance": 1206
    },
    {
      "id": "6238a7529343ae286e4e8558",
      "index": 4,
      "balance": 417
    }
  ]
  const subTotalForNastedArray =(previous,current)=>previous+current.balance
  const totalForNastedArray=nastedArray.reduce(subTotalForNastedArray,0)
    return (
        <div>
            <h1>simple total : {total}</h1>
            <h3>Nassted total : {totalForNastedArray}</h3>
        </div>
    );
};

export default Reduce;