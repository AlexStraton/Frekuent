import NavBar from './components/NavBar'
import './index.css'
import MySchedule from './pages/MySchedule'
import SearchPage from './pages/SearchPage'
import RegisterForm from './components/RegisterForm'
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
const [addedSessions, setAddedSessions] = useState({});

  return (
    <>
<NavBar />
<Routes>
<Route path='/Home' element={<SearchPage addedSessions={addedSessions} setAddedSessions={setAddedSessions}/>} />
<Route path='/Register' element={<RegisterForm addedSessions={addedSessions}/>} />
<Route path='/MySchedule' element={<MySchedule />} />
</Routes>
    </>
  )
}

export default App
