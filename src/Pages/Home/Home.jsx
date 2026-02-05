import React from 'react'  
import Navbar from '../../components/Navbar.jsx';
import Hero from './Hero';
import TwinWindows from './TwinWindows';
import ReportIce from './ReportIce';
import News from './News';
import Newsletter from './Newsletter';
import KnowyourRights from './KnowyourRights';

import { Routes } from 'react-router-dom';

const Home = () => {
  return (
    <>
       <Navbar/>
      <>
        <Hero/>
        <TwinWindows/>
        <News/>
        <ReportIce/>
        <KnowyourRights/>
        <Newsletter/>
    
      </>
    </>
  )
}

export default Home
