import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contactus from "./Contactus";
import ErrorPage from "./ErrorPage";
export default function App() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate a loading process
    const simulateLoading = () => {
      setProgress(30);

      setTimeout(() => {
        setProgress(70);

        setTimeout(() => {
          setProgress(100);
        }, 500);
      }, 1000);
    }
    
    simulateLoading();
  }, []);   

  
  return (
    <BrowserRouter>
     <div>
          <LoadingBar
            color="cyan"
            height='5px'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
      </div>


      <div className="grid place-content-center">
          <div className="max-w-7xl">
              <Header />
                <Routes>
                    <Route index path="/" element={<Home/>} />
                    <Route  path="/about" element={<About/>} />
                    <Route  path="/work" element={<Work/>} />
                    <Route  path="/contact" element={<Contactus/>} />
                    <Route  path="*" element={<ErrorPage/>} />
                </Routes>
          </div>
      </div>
        <Footer />

    </BrowserRouter>
  )
}