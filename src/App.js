
import { AppBar, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Route, Routes } from "react-router-dom"
import Login from './components/Login';
import RegisterForm from './components/Register';
import Dashboard from './components/dashboard/dashboard';
function App() {
  return (
    <React.Fragment>
      <AppBar position='inline'><Toolbar>Company Mark</Toolbar></AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>


      </Container>
    </React.Fragment>
  );
}

export default App;
