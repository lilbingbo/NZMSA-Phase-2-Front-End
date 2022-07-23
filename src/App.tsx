import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';

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
      <input type="text" id="item-name" name="item-name" onChange={event => setUserInput(event.target.value)}/><br/>
      <button onClick={search}>
      Search
      </button>
    </div>

    <p>
      You have entered:
    </p>

    {zeldaItemInfo === undefined || zeldaItemInfo === null ? (
        <p>Item not found</p>
      ) : (
        <div id="item-result">
          <p>{zeldaItemInfo.data.name.charAt(0).toUpperCase() + zeldaItemInfo.data.name.slice(1)}</p>
          <img src={zeldaItemInfo.data.image} />
          <p>{zeldaItemInfo.data.description}</p>
        </div>
      )}
  </div>
);

function search(){
  axios.get(HYRULE_COMPENDIUM_API + userInput)
  .then((res) => {
    setZeldaItemInfo(res.data);
    console.log(res.data);
  })
  .catch(() => {
    setZeldaItemInfo(null);
  });
}
}

export default App;