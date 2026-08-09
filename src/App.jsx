import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
