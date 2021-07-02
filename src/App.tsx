import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { createContext } from 'react';

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';
import { create } from 'domain';

export const TestContext = createContext('');

function App() {
  return (
    <BrowserRouter>
      <TestContext.Provider value={'Teste'}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </TestContext.Provider>
    </BrowserRouter>
     
       
  );
}

export default App;
