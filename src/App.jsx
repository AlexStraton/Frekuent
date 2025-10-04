import NavBar from './components/NavBar'
import './index.css'
import MySchedule from './pages/MySchedule'
import SearchPage from './pages/SearchPage'
import RegisterForm from './components/RegisterForm'
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
const [addedSessions, setAddedSessions] = useState({});

 const toggleSession = (sessionId) => {
    setAddedSessions((prev) => ({
      ...prev,
      [sessionId]: !prev[sessionId],
    }));
  };

  return (
    <>
<NavBar />
<Routes>
<Route path='/Home' element={<SearchPage addedSessions={addedSessions}
              toggleSession={toggleSession}/>} />
<Route path='/Register' element={<RegisterForm />} />
<Route path='/MySchedule' element={<MySchedule addedSessions={addedSessions}/>} />
</Routes>
    </>
  )
}

export default App
