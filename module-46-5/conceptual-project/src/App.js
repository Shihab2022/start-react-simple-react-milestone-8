import './App.css';
import Manubar from './Componant/Manubar/Manubar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProduct from './Componant/AllProduct/AllProduct';
import { useState } from 'react';
function App() {
  const [count,setCount]= useState(0)
const setData =()=>setCount(count+1)
const deleteData =()=>setCount(count-1)
  return (
    <div className="App">
     
<Manubar count={count}></Manubar>
<AllProduct setData={setData} deleteData={deleteData}></AllProduct>

    </div>
  );
}

export default App;
