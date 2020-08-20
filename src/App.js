import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import HelloContextProvider from './contexts/HelloContext';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import CreateLang from './components/CreateLang';


function App() {
  
  return (
    <Router>
      <div className="App">
      
      <Navbar />
        <Route exact path='/'>
            <HelloContextProvider>
            <Content />
            </HelloContextProvider>
        </Route>
        <Route path='/create'>
             <CreateLang/>
        </Route>

      </div>
    </Router>
    
  );
}

export default App;
