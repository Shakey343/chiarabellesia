// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className='flex flex-col py-10 bg-off-white min-h-screen'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
