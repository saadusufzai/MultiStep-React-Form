import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import {InputLabel, Input, Box, Container, TextField, Button} from '@material-ui/core';

export default function MainForm() {
    
    
    
    return (
        <Container  maxWidth='sm'>
            <FormControl  variant='filled'  >
                <div>
                <TextField
                    id='name'
                    label='Name'
                    type='text'
                    required
                    
                />
                </div>
                <div>
                <TextField
                    id='lastName'
                    label='Last Name'
                    type='text'
                    required
                    

                />
                </div>
                <div>
                <TextField
                    id='email'
                    label='Email Address'
                    type='Email'
                    required
                    
                />
                </div>

                <div><Button  variant='outlined' color='primary' >Continue</Button>
                </div>          
            </FormControl>
        </Container>
    )
}
