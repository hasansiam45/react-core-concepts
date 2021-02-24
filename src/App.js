import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const hero = [
    { name: 'Alamgir', heroin: 'Shabana' },
    { name: 'Jashim', heroin: 'Bobita' },
    { name: 'Salman Shah', heroin: 'Shabnur' },
    { name: 'Omor Sunny', heroin: 'Moushumi' }
  ]



  return (
    <div className="App">
      <header className="App-header">


     <Counter></Counter>
     <Users></Users>
     <Product name="Ps" price="US$20.99"></Product>
     <Product name="Pr" price="US$18.50"></Product>
     <Product name="Ru" price="US$21.10"></Product>
     <Product name="Ai" price="US$25.00"></Product>
     
        <ul>
          {
            hero.map(nayok => <li>{nayok.name}</li>)
          }
        </ul>

        
      </header>
    </div>
  );
}

function Product(props) {

  const ProductStyle = {
    border: '2px solid gray',
    borderRadius: '12px',
    width: '300px',
    height: '300px',
    padding: '10px',
    margin : '5px',
    backgroundColor: 'lightgray',
    color: 'black'
  }
  return (
    <div style = {ProductStyle}>
      <h2> {props.name} </h2>
      <h1> {props.price} </h1>
      <br/>
      <button>Buy Now</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  
  const handleDecrease = () => {
    if (count > 0) {
    setCount(count - 1)
    }
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


export default App;
