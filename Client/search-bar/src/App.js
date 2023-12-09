import { React, useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List"
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  // const [inputData, setInputData] = useState();

  const debounce = (func, wait) => {
    let timeout;

    return (...args) => {
      clearTimeout(timeout); 
      timeout = setTimeout(() => func(...args), wait);
    }
  }

  const fetchResults = async (searchText) => {
    const BASE_URL = "http://localhost:8090/api/movies/";

    if(searchText !== "") {
      const resp = await axios.get(`${BASE_URL}${searchText}`)
      setData(resp.data);
    }
  }

  let handleSearch = useCallback(debounce(fetchResults, 500), []);

  return (
    <div className="main">
      <h1>Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={(e) => handleSearch(e.target.value)}
          fullWidth
          label="Search"
        />
      </div>
      <List list={data} />
    </div>
  );
}

export default App;
