import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages';
import { Navbar } from './components';


function App() {
  return (
    <div className="App">
     <Router>
        <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
