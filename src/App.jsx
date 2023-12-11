import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'

function App() {


  return (
    <div className='bg-[#000000] text-white'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className='bg-[#2B3440]'><Footer></Footer></div>
    </div>
  )
}

export default App
