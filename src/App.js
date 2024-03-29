import React from "react";
// import logo from "./logo.svg";
import {Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import CodingPlatform from "./pages/jobs/Jobs"
import Jobs from "./pages/organizations/Jobs"
import Navbar from "./components/Navbar";
import Organizations from "./pages/organizations/Organizations";
// import Footer from "./components/Footer";
import { useAuth0 } from '@auth0/auth0-react';
import Hashnode from "./pages/news/News";
function App() {
  const { isAuthenticated } = useAuth0();

 
  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        </Routes>

     {isAuthenticated ?
     ( <Routes>
      <Route path="/org" element={<Organizations />} />
      <Route path="/platforms" element={<CodingPlatform />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/dev" element={<Hashnode />} />
      </Routes> ):(
     ""
     )
      }
        {/* <Footer /> */}
    </>
  );
  
}

export default App;
