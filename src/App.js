
import './css/app.css';
import TeaserList from './components/teaserList'
import { useEffect } from 'react';
import { Routes, Route,useLocation } from "react-router-dom";

import ReactGA from "react-ga4";



function App() {
   const location = useLocation();

  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    });
  }, [location]);


  return (
    <div className="App">
        
        <header>
              <h1>Ali S. Qadeer</h1>
            
              <h1 className="right"><span className="zp">Recent Work</span></h1>
        </header>
           <Routes>
      <Route path="/" element={<TeaserList />} />
      <Route path="/work/:teaserId" element={<TeaserList />} />
    </Routes>
    
    <footer>
              <h1><span className="dg">ali.shamas.qadeer@gmail.com</span></h1>
            
              <h1><span className="sem">All fonts on this site designed by yours truly.</span></h1>
            </footer>
    </div>
  );
}

export default App;
