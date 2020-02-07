import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import MainPhoto from './mainPhoto'
function App() {

  const [photo, setPhoto] = useState('');

  

  useEffect(()=> {
    axiosData
    .then(dataObj => {
      console.log('data here:', dataObj)
      
      setPhoto(dataObj.data.url)
    })
    .catch(error => {
      console.log('error message:', error)
    })
  }, [])
  return (
    <MainPhoto photo={photo}/>
  );
}

export default App;

const axiosData = axios.get('https://api.nasa.gov/planetary/apod?api_key=Mk4UTzOR5jVQvS8KvqaqC3v9fiZngJdzqKPf28ve')
