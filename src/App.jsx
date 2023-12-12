import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import Alert from './Shared/Alert'

function App() {


  return (
    <div className='bg-[#000000] text-white'>
      <Navbar></Navbar>
      <Alert></Alert>
      <Outlet></Outlet>
      <div className='bg-[#2B3440]'><Footer></Footer></div>
    </div>
  )
}

export default App
