import logo from './logo.svg';
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
    <Box className="App">
      <BrowserRouter>
        <Navbar bg='light' variant='light' className='mb-3'>
          <Container fluid>
            <Navbar.Brand href='/' to="/">Nicole Murray</Navbar.Brand>

            <Box style={{float: 'right'}}>
              <Nav>
                <Nav.Link href="background" to="/background">Background</Nav.Link>
                <Nav.Link href="resume" to="/resume">Resume / CV</Nav.Link>
                <Nav.Link href="works" to="/works">Works</Nav.Link>
                <NavDropdown title="Research" align='end'>
                  <NavDropdown.Item href="undergrad" to="/undergrad">Undergraduate Research</NavDropdown.Item>
                  <NavDropdown.Item href="masters" to="/masters">Masters Thesis</NavDropdown.Item>
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
          <Route path='/undergrad' element={<Undergrad />} />
          <Route path='/masters' element={<Masters />} />
        </Routes>
      </BrowserRouter>
      
    </Box>
  );
}

export default App;
