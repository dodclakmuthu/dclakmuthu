import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

// import NotificationContext from './components/NotificationContext';
import Admin from './pages/admin/Admin';
import Home from './pages/home/Home';
import AHome from './pages/admin/AHome';
import {NotificationContext} from './context'
import NotificationBar from './components/NotificationBar';


function App() {

  const [notifications, setNotifications] = useState([])

  const addNotification = (type, message) =>{
    setNotifications([...notifications, {type,message}])
  }
  return (
    <div className="App">
    <NotificationBar notifications={notifications} />
    <NotificationContext.Provider value={addNotification}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="" index element={<AHome />}></Route>
          <Route path="skills" element="<h1>Skills</h1>"></Route>
          <Route path="projects" element="<h1>Projects</h1>"></Route>
          <Route path="contact" element="<h1>Contact</h1>"></Route>
        </Route>
      </Routes>
      </NotificationContext.Provider>
    </div>
  );
}

export default App;

