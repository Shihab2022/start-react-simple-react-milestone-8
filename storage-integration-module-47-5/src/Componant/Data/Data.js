import React, { useEffect, useState } from 'react';

const Data = () => {
// const []= useState()
    const allData=[
        {
          "id": "623863c21bda43e3209aa6ab",
          "index": 0,
          "picture": "http://placehold.it/32x32",
          "name": "Maxwell Spence"
        },
        {
          "id": "623863c2a2b659c9ff2cb8d1",
          "index": 1,
          "picture": "http://placehold.it/32x32",
          "name": "Wilkins Dean"
        },
        {
          "id": "623863c2c00689cb684883a6",
          "index": 2,
          "picture": "http://placehold.it/32x32",
          "name": "Donna Frye"
        },
        {
          "id": "623863c2380f5f0d353276e4",
          "index": 3,
          "picture": "http://placehold.it/32x32",
          "name": "Bright Kelly"
        },
        {
          "id": "623863c26178378834529ab4",
          "index": 4,
          "picture": "http://placehold.it/32x32",
          "name": "Hendrix Ferguson"
        }
      ]
      useEffect(() =>{
          fetch(allData)
          .then(res=>res.json())
          .then(data=>console.log(data))

      })

    return (
        <div>
            
        </div>
    );
};

export default Data;
