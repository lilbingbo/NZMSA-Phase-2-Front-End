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
    <h1>
      Hyrule Compendium Search
    </h1>
    
    <div>
      <label>Item Name</label><br/>
      <TextField id="standard-basic" label="Standard" variant="standard" onChange={event => setUserInput(event.target.value)}/>
    </div>
  
  <div> 
  <Button variant="text" onClick={search}>Search</Button>
  </div>

    <p>
      You have entered:
    </p>

    {zeldaItemInfo === undefined || zeldaItemInfo === null ? (
        <p>Item not found</p>
      ) : (
        <ItemCard data={zeldaItemInfo.data} />
      )}
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