import React, { useEffect } from 'react';
import './App.css';

function App() {
  const [appState, setAppState] = React.useState([])

  useEffect(() => {
    fetch("http://cruddy-server:8080/")
    .then(res => res.json())
    .then((data)=> {
      setAppState(data)
      console.log(data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div><p>{JSON.stringify(appState)}</p></div>
  )
}

export default App;
