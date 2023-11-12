import React, { useEffect} from 'react';
import LoadingBar from 'react-top-loading-bar';
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "../assets/css/style.css";
import { render } from "react-dom";

function Header() {

  const [progress, setProgress] = useState(0);

  const simulateLoading = () => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70);

      setTimeout(() => {
        setProgress(100);
      }, 500);
    }, 1000);
  }   

  const [selectedMenuItem, setSelectedMenuItem] = useState(false);
  const toggleMenu = () => {
    setSelectedMenuItem(!selectedMenuItem);
  };


  const closeMenu = () => {
    setSelectedMenuItem(false);
    setProgress(0);
    simulateLoading();
  };

  const logostyle = {
    fontFamily: 'disneyfont',
    fontSize: '29px',
    transform: 'rotate3d(1, 1, 1, -378deg)',
    color: 'black',
  }

  

  return (
    <>
      <div>
        <LoadingBar
          color="cyan"
          height='5px'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      </div>

      <header className="text-gray-600 px-4 py-2 body-font">
         <nav className="flex justify-between items-center">
           <Link className="logo" to='/' style={logostyle}>
            Dhananjay <br /> 
           </Link>

           <div className="outer-menu">
              <input
                className="checkbox-toggle"
                type="checkbox"
                checked={selectedMenuItem}
                onChange={toggleMenu}
              />
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <Link className="heading font-bold uppercase" to="/" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="heading font-bold uppercase" to="/about" onClick={closeMenu}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="heading font-bold uppercase" to="/contact" onClick={closeMenu}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="heading font-bold uppercase" to="/work" onClick={closeMenu}>
                      Work
                    </Link>
                  </li>
                  <Outlet />
                </ul>
              </div>
            </div>
          </div>
        </div>
           

         </nav>
      </header>
    </>
  );
}

export default Header;
