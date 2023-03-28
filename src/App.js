import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages';
import { Navbar } from './components';
import { useState } from 'react';
import { createContext } from 'react';


export const AppContext = createContext();

function App() {
  const [showNav , SetShowNav] = useState(false);

  
  return (
    <AppContext.Provider value={{showNav, SetShowNav}}>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
          </Routes>
        </Router>
    </div>
    </AppContext.Provider>
    
  );
}

export default App;
