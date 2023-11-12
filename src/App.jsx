import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contactus from "./Contactus";
import ErrorPage from "./ErrorPage";
export default function App() {
  
  return (
    <BrowserRouter>
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