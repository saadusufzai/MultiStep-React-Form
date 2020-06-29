import React,{useState} from 'react';
import './App.css';
import Header from './components/Header' 
import Steper from './components/Stepper/Steper'
import { Grid } from '@material-ui/core';

function App() {
  const [data, setData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    field:'',
    proffession:'',
    experties:''

  })

 const handleChange = (input) => e => {
    setData({ [input]: e.target.value });
  };

  const  { firstName, lastName, email, field, proffession,experties} = data
  const values = { firstName, lastName, email, field, proffession,experties}
  return (
  <div>
    <Grid  container xs={12} sm={8} md={6}  >
    <Header />
    <Steper handleChange={handleChange} values = {values} />
    </Grid>
  </div>
  );
}

export default App;
