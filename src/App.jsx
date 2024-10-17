// src/App.jsx
import { useState } from "react";
import { useEffect } from "react";

import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import { index } from "./services/starshipService";

import './App.css';

const App = () => {

  const [starships, setStarships] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchShipData = async () => {
      const data = await index()
      setStarships(data.results)
      console.log(data.results)
    }
    fetchShipData()
  }, [])

  return (
    <>
      <h1>Star Wars API</h1>
      <h2>Search</h2>
        <StarshipSearch setFilter={setFilter} />
        <StarshipList starships={starships} filter={filter}/>
    </>
  );
}

export default App
