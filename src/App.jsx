import NavBar from './components/NavBar'
import './index.css'
import MySchedule from './pages/MySchedule'
import SearchPage from './pages/SearchPage'
import RegisterForm from './components/RegisterForm'
import { Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {

  return (
    <>
<NavBar />
<Routes>
<Route path='/' element={<SearchPage />} />
<Route path='/Register' element={<RegisterForm />} />
<Route path='/MySchedule' element={<MySchedule />} />
</Routes>
    </>
  )
}

export default App
