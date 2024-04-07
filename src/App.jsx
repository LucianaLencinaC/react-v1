import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbarr from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Tareas from './Components/Tareas/Tareas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbarr/>
     <Tareas/>
     <Footer/>
    </>
  )
}

export default App
