import React from 'react';
import './App.css';
import Header from './components/Header' 
import Steper from './components/Stepper/Steper'
import { Grid } from '@material-ui/core';

function App() {
  return (
  <div>
    <Grid  container xs={12} sm={8} md={6}  >
    <Header />
    <Steper />
    </Grid>
  </div>
  );
}

export default App;
