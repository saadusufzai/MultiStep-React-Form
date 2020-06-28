import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar, Container } from '@material-ui/core';


export default function Header() {


  return (
    <div>
     <Container maxWidth='sm'>
     <AppBar color='primary' position="sticky">
       <Toolbar variant='dense'>
         <Typography align='center'  variant='h6'>Form</Typography>
       </Toolbar>
      </AppBar>
     </Container>
    </div>
  );
}