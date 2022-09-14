import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Typography, Box } from '@mui/material';
import Bubs from './resources/BUBS.png';

function App() {
  return (
    <Box className="App" justifyContent='center' alignItems='center' sx={{height: '100vh', border: '1px solid red'}}>
      <Typography variant='h4'>
        <strong>ERROR 69</strong> - Bubbs could not find the website you're looking for
      </Typography>

      <img src={Bubs} style={{height: '500px'}} />
    </Box>
  );
}

export default App;
