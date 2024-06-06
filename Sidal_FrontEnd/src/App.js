import './App.css';
import {NavListMenu, BodySiteContainer, FooterSite } from './Sections/index'
import { Home, About,  Compressor,  WaterTratement, Laboratory, Printers,  Spare, ContuctUs } from './Pages/index';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const App = () => {



    return (
    <div className='TheShow'>
        <Router>
            <NavListMenu/>
            Laboratory
            <BodySiteContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/compressor" element={<Compressor />} />
                    <Route path="/WaterTratement" element={<WaterTratement />} />
                    <Route path="/printers" element={<Printers />} />
                    <Route path="/Laboratory" element={<Laboratory />} />
                    <Route path="/Spare" element={<Spare />} />
                    <Route path="/contuct-us" element={<ContuctUs />} />
                </Routes>
            </BodySiteContainer>
            <FooterSite/>
        </Router>
      </div>
  )
}

export default App









/*


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function YourComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/yourmodel/')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);
      return 
        (
          <div>
              {
                data.map
                  (
                    (item) =>
                      (
                          <li key={item.id}>{item.name}</li>
                      )
                  )
              }
          </div>
        )
    */