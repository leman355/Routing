import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import AboutMe from './components/AboutMe';
import Examples from "./components/Examples"
import Contacts from "./components/Contacts"
import "./App.css"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='nav'>
          <ul>
          <li><Link className='nav-link' to={"/"} >Home page</Link></li>
          <li><Link className='nav-link' to={"/AboutMe"} >About me</Link></li>
          <li><Link className='nav-link' to={"/Examples"} >Examples</Link></li>
          <li> <Link className='nav-link' to={"/Contacts"} >Contacts</Link></li>
       </ul> 
       </div>
        <Routes>
          <Route path='/AboutMe' element={<AboutMe />}></Route>
          <Route path='/Examples' element={<Examples />}></Route>
          <Route path='/Contacts' element={<Contacts />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;