import { useRef, useState } from 'react';
import './App.css';
import ApiFetch from './components/ApiFetch'

function App() {

  const [fetchData, setFetchData] = useState([])
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(ref.current.value)

    // APIをたたく
    const endpointURL = `http://127.0.0.1:8000/api/${ref.current.value}/`
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
      <h2>EChub</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="商品を検索" ref={ref}/>
      </form>
      <ApiFetch fetchData={fetchData}/>
    </div>
  );
}

export default App;
