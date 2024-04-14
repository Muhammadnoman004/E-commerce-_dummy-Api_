import './App.css';
import Router from './Component/Router/Router';
import Product from './Component/Context/Context';
import { useState } from 'react';

function App() {

  const [Data, setData] = useState([])

  return (
    <div className="App">
      <Product.Provider value={[Data, setData]}>
        <Router />
      </Product.Provider>
    </div>
  );
}

export default App;
