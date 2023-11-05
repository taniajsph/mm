
import './App.css'
import ConfessionCard from './component/ConfessionCard'
import Feed from './pages/feed';
import Navbar from './component/Navbar';
import AddConfession from './component/AddConfession';
import {BrowserRouter, Routes,Route} from "react-router-dom";
function App() {
 
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
         <Route exact path="/" Component={Feed}/>
         <Route exact path="/add" Component={AddConfession}/>
        </Routes>
   </BrowserRouter>
  
    </>
  )
}

export default App
