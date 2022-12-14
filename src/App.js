import './App.css';
import React from 'react';

import { Typography, Box } from '@mui/material';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './components/Landing';
import Background from './components/Background';
import Undergrad from './components/Undergrad';
import ResumeCV from './components/ResumeCV';
import Works from './components/Works';
import Masters from './components/Masters';

function App() {
  return (
    <Box className="App" sx={{background: '#F5E3E0', textAlign: 'center'}}>
      <BrowserRouter>
        <Navbar className='navbar'>
          <Container fluid>
            <Navbar.Brand href='/' to="/">Nicole Murray</Navbar.Brand>

            <Box style={{float: 'right'}}>
              <Nav>
                <Nav.Link href="background" to="/background">Background</Nav.Link>
                <Nav.Link href="resume" to="/resume">Resume / CV</Nav.Link>
                <Nav.Link href="works" to="/works">Works</Nav.Link>
                <NavDropdown title="Research" align='end'>
                  <NavDropdown.Item href="research/undergraduate" to="research/undergraduate">Undergraduate Research</NavDropdown.Item>
                  <NavDropdown.Item href="research/masters" to="research/masters">Masters Thesis</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Box>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/background' element={<Background />} />
          <Route path='/resume' element={<ResumeCV />} />
          <Route path='/works' element={<Works />} />
          <Route path='research/undergraduate' element={<Undergrad />} />
          <Route path='research/masters' element={<Masters />} />
        </Routes>
      </BrowserRouter>
      
    </Box>
  );
}

export default App;
