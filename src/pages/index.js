import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const index = (props) => {
  const [joke,setJoke] = useState('');
  useEffect(() => {
    getJoke();
  }, []);
  
  const getJoke = async() =>{
    const res = await axios.get('https://api.chucknorris.io/jokes/random');
    setJoke(res.data.value)
  }

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col lg 12">
            <h1>Home</h1>
            <p>lorem</p>
            <p>Value CSR: {joke}</p>
            <p>Value SSR: {props.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export const getStaticProps = async () => {
  const res = await axios.get('https://api.chucknorris.io/jokes/random');
  return {
    props: {
      value: res.data.value
    }
  };
};


export default index
