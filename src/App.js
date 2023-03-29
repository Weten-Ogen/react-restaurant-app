import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages';
import { Navbar } from './components';

import {createContext,useState } from 'react';


export const AppContext = createContext();

function App() {
  const [nav, SetNav] = useState(false);
  
  return (
    <AppContext.Provider value={{nav, SetNav}}>
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
