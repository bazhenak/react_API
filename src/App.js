import './index.css';
import {Link, Route, Routes} from "react-router-dom";
import './Home/Home.js'
import Home from "./Home/Home";
import Contacts from "./Contacts/Contacts";


export default function App() {
  return (
    <div className="App">
        <h1>React приложение Api</h1>
        <div className='router-nav-container container'>
          <nav className='navigation-menu'>
              <div className='navigation-menu__container'>
                  <div>
                      <Link to='/home'>Элементы с сервера</Link>
                  </div>
                  <div>
                      <Link to='/contacts'>Методы</Link>
                  </div>
              </div>
          </nav>
        </div>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/contacts' element={<Contacts />} />
        </Routes>
    </div>
  );
}

