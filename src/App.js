import './index.css';
import {Link, Route, Routes} from "react-router-dom";
import './Home/Home.js'
import Home from "./Home/Home";
import Redirect from "./Redirect/Redirect";
import About from "./About/About";


export default function App() {
  return (
    <div className="App">
        <div className='router-nav-container container'>
          <nav className='navigation-menu'>
              <div className='navigation-menu__container'>
                  <div>
                      <Link to='/home'>Главная</Link>
                  </div>
                  <div>
                      <Link to='/contacts'>Redirect</Link>
                  </div>
                  <div>
                      <Link to='/about'>О нас</Link>
                  </div>
              </div>
          </nav>
        </div>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/contacts' element={<Redirect />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </div>
  );
}

