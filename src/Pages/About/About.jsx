import React from 'react'
import Navbar from '../../components/Navbar'
import AboutusHeading from "./AboutusHeading";
import MissionStatement from './MissionStatement';
import Steps from './Steps';
import IceApp from './IceApp';
import VerifyReport from './VerifyReport';
import Contact from './Contact';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutusHeading/>
      <MissionStatement/>
      <Steps/>
      <IceApp />
      <VerifyReport/>
      <Contact/>
    </>
  )
}

export default About
