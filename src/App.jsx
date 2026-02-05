import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import LeagalAid from './components/LeagalAid';


function App() {


  return (
    <>
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
      <Navbar />
       <Outlet />
      <LeagalAid/>
     </main>
     
      
    </>
  )
}

export default App
