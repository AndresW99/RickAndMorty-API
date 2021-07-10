import React from 'react';
import { Header } from './components/Header';
import { RickAndMorty } from './helpers/API';


function App() {
  return (

    <>
      <Header />
        <div className="container-fluid">

          <RickAndMorty />
        </div>
    </>

  );
}

export default App;