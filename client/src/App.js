import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import React, { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
//import PaymentSuccess from './PaymentSuccess';
import Chat from './components/Chat';





function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());

  }, [dispatch])

	
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
        {/* <div style={{position:"fixed", right:"40px"}}><Chat/></div>  */}
      </Router>
    </div>
  );
}

export default App;
