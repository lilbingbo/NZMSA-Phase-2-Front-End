import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';
import ItemCard from './Components/ItemCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
const [userInput, setUserInput] = useState("");
const [zeldaItemInfo, setZeldaItemInfo] = useState<undefined | any>(undefined);

const HYRULE_COMPENDIUM_API = "https://botw-compendium.herokuapp.com/api/v2/entry/";
return (
  <div>
    <div> 
      <h1 style={{ display: "flex", justifyContent: "center" }}>Hyrule Compendium Search</h1>
      <div className="center">
        <label>Search for creatures, equipment, materials, monsters, or treasure:</label>
        <br/>
        <br/>
        <TextField id="standard-basic" label="Enter item name" variant="standard" onChange={event => setUserInput(event.target.value)}/>

        <Button variant="text" onClick={search}>Search</Button>
      </div>
    </div>
    <br/>
  <div style={{ display: "flex", justifyContent: "center" }}>
    {zeldaItemInfo === undefined || zeldaItemInfo === null ? (
        <p>Item not found</p>
      ) : (
        <ItemCard data={zeldaItemInfo.data} />
      )}
  </div>
  </div>
);

function search(){
  axios.get(HYRULE_COMPENDIUM_API + userInput)
  .then((res) => {
    setZeldaItemInfo(res.data);
   // console.log(res.data);
  })
  .catch(() => {
    setZeldaItemInfo(null);
  });
}
}

export default App;