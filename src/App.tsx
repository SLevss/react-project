import React from 'react';
import { Timer } from './components/Timer';


function App() {
  return <div style={{'display': 'flex'}}>
    <div style={{'display': 'flex', flexDirection:'column'}}>
      <Timer cityOrCountry = {'Toronto'}></Timer>
      <Timer cityOrCountry = {'New York'}></Timer>
      <Timer cityOrCountry = {'Khabarovsk'}></Timer>
      <Timer cityOrCountry = {'India'}></Timer>
      <Timer cityOrCountry = {'Israel'}></Timer>
    </div>
    
  </div>
    
}

export default App;
