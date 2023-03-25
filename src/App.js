import { useState } from 'react';
import './App.css';
import ApiFetch from './components/ApiFetch'
import Navbar from './components/Navbar';

function App() {

  const [fetchData, setFetchData] = useState([])

  const handleSubmit = (keyword) => {

    // APIをたたく
    const endpointURL = `http://127.0.0.1:8000/api/${keyword}/`
    fetch(endpointURL)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setFetchData(data)
      })
  }

  return (
    <div className="App">
      <Navbar handleSubmit={handleSubmit}/>
      <ApiFetch fetchData={fetchData}/>
    </div>
  );
}
export default App;
