import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const devices = [
  {brand:'asus', model:'zen-phone', price:14000, status: 'available' },
  {brand:'xiaomi', model:'redmi 9', price:10000, status: 'available' },
  {brand:'apple', model:'Iphone 9pro', price:34000, status: 'not available'},
  {brand:'walton', model:'primo x6', price:7000, status: 'available' }
]
function App() {
  return (
    <div className="App">
      {
        devices.map(device => <Products brand={device.brand} model={device.model} price={device.price} status={device.status}></Products>)
      }
      <Counter></Counter>
      <LoadData></LoadData>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
const Products = (props) => {
  console.log(props);
  const {brand, model, price, status} = props
  return(
    <div>
      <h2>company : {brand}</h2>
      <h3>model : {model}</h3>
      <h4>price : ${price}</h4>
      <h4>{status}</h4>
    </div>
  )
}

// useState counter
const Counter = () => {
  const [count, setCount] = useState(0)
  return(
    <div>
      <h2>counted : {count} </h2>
      <button onClick={() => {setCount(count + 1)}}>add +</button>
    </div>
  )
}


// from api
const LoadData = () => {
 const [items, setItems] = useState([])
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => setItems(data.results))
  }, [])

  return(
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
      {
       items.map(person => 
       <div style={{backgroundColor:'gray', width:'100px', borderRadius:'20%'}}>
         <img style={{borderRadius:'50%'}} src={person.picture.medium} alt="" srcset=" "/> 
         <h3>{person.name.title} {person.name.last}</h3>
       </div>) 
      }
    </div>
  )
}

export default App;
