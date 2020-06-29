import React,{useState} from 'react';
import './App.css';
import Header from './components/Header' 
import Steper from './components/Stepper/Steper'
import { Grid } from '@material-ui/core';
import Footer from './components/Footer';

function App() {
  
  const [data, setData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    field:'',
    profession:'',
    experience:'',
    stage:''

  })

 const handleChange = input => e => {
    setData({...data, [input]: e.target.value });
  };
const handelReset = () =>{
  setData('')
}

  return (
  <div>
    <Grid  container xs={12} sm={8} md={6}  >
      <Header />
      <Steper handleChange={handleChange}
              values = {data}
              resetState = {handelReset}
              />
    </Grid>
    
    <Footer/>
  </div>
  );
}

export default App;
