import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import MasonryGrid from './components/MasonryGrid';
import Footer from './components/Footer';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});

  //using useEffect, fetch data from api to populate data for web app
  useEffect(() => {
    fetch("https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          console.log('this is the result: ', result)
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;

  } else {
  return (
    <div className="App">
      <Header />
      <HeroCarousel isLoaded={isLoaded} items={items} />
      <MasonryGrid isLoaded={isLoaded} items={items} />
      <Footer isLoaded={isLoaded} />
    </div>
  );
  }
}

export default App;
