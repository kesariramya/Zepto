// import logo from './logo.svg';
import './App.css';
import Catogeries from './Catogeries';

import Icecreams from './Icecreams';
import Navbar from './Navbar';
import Newcatogeries from './Newcatogeries';
import Savings from './Savings';
import Snacks from './Snacks';
import Summerfruits from './Summerfruits';
// import {Routes,Route} from "react-router-dom"
// import {BrowserRouter} from"react-router-dom"
function App() {
  return (
    <div>
      {/* <BrowserRouter>
     <Routes>
<Route path="/catogeries"element={<catogeries/>}></Route>
     </Routes>
     </BrowserRouter> */}
     <Navbar></Navbar>
     <Catogeries></Catogeries>
  <Newcatogeries></Newcatogeries> 
  <Snacks></Snacks>
  <Savings></Savings>
  <Summerfruits></Summerfruits>
  <Icecreams></Icecreams>
  
  
   
    </div>
      );
}

export default App;
