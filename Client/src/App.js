import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbarr from './components/Navbarr';
import Home from './files/Home';
import Mess from './files/Mess';
import Complaints from './files/Complaints';


// Import the Issues component

function App() {
  return (
    <>
    <div className='App'>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mess" element={<Mess/>}/>
      <Route path="/complaints" element={<Complaints/>}/>
      
     </Routes> 
    <Navbarr/>
    </div>
    </>
  );
}

export default App;