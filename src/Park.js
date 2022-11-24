import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_page from './Home_page';
import Opening_Page from './Opening_Page';
import Map from './Map_page';
import Review_Page from './Review_Page';
import Lang_page from './Lang_page';
import Calc_page from './Calc_page';
import Info_page from './Info_page';

 export default function Park() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home_page />}></Route>
          <Route path="/" element={<Opening_Page />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/review" element={<Review_Page/>}></Route>
          <Route path="/language" element={< Lang_page/>}></Route>
          <Route path="/info" element={< Info_page/>}></Route>
          <Route path="/calculator" element={< Calc_page/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
