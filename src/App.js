import React,{useState,useEffect} from 'react'
import instance from './models/axios'
import Row from './components/Row'
import requests from './utils/requests'
import './App.css'
import Banner from './components/Banner'

const App=()=> {  
  const [data,setData] = useState([])

  return (
    <div className="App">
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRaw />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
