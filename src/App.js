import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

function App() {

  const [photo, setPhoto] = useState('');

  

  useEffect(()=> {
    axiosData
    .then(dataObj => {
      console.log('data here:', dataObj)
      console.log('url here', dataObj.data.url)
      setPhoto(dataObj.data.url)
      console.log('photo url:', photo)
    })
    .catch(error => {
      console.log('error message:', error)
    })
  }, [])
  return (
    <div className="App">
      <p>
        
      </p>
    </div>
  );
}

export default App;

const axiosData = axios.get('https://api.nasa.gov/planetary/apod?api_key=Mk4UTzOR5jVQvS8KvqaqC3v9fiZngJdzqKPf28ve')
