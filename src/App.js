
import { useEffect, useState } from 'react';
import './App.css';
import {Quote} from './quote';
import axios from 'axios';
import { Button } from './Button';

function App() {
  const [quote,setQuote] = useState({});

  const fetchQuote = async () =>{
      const response = await axios.get("https://type.fit/api/quotes");
      setQuote(response.data[Math.floor(Math.random()*10)]);
      
  }
  useEffect(() => {
    fetchQuote();
  },[] )
  console.log(quote);
  return (
    <div className='text-center w-[600px] mx-auto mt-36 bg-gray-200 p-4 rounded   '>
      <h1 className='font-bold text-3xl'>Random Quote Machine</h1>
      <Quote quote={quote} />
      <Button onClick = {fetchQuote} text="Generate Quote"/>
    </div>
  );
}

export default App;
