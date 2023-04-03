import { useState } from 'react';
import './App.css';
import ApiFetch from './components/ApiFetch'
import Navbar from './components/Navbar';

function App() {

  const [fetchData, setFetchData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (keyword) => {
    
    if (keyword.trim() === '') {
      setFetchData([]);
      return;
    }
    
    setIsLoading(true)
    // APIをたたく
    const endpointURL = `http://127.0.0.1:8000/api/${keyword}/`
    fetch(endpointURL)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setFetchData(data)
        setIsLoading(false);
      })
  }

  return (
    <div className="App">
      <Navbar handleSubmit={handleSubmit}/>
      <ApiFetch fetchData={fetchData} isLoading={isLoading}/>
    </div>
  );
}
export default App;
