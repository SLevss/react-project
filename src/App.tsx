import React from 'react';
import {getRandomNumber,getRandomMatrix,getRandomArrayElement} from './utils/random';
function App() {
  console.log(getRandomNumber(1,50,true,false)) 
  console.log(getRandomMatrix(50,50,1,50))
  console.log(getRandomArrayElement([1,50,100,1000,10000]))
  return <div >


  </div>
  
  }
  export default App;

