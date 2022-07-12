import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';


export default function FormRegister() {

  // function cadastrarUsuario(e) {
  //     e.preventDefault()
  //     console.log(`Usuario ${name} cadastrado com a senha ${password}`)
  //   }

  // const [name, setName] = useState()
  // const [password, setPassword] = useState()

  return (
    
    <div align='center' >
      <Card style={{ maxWidth:'450', margin:'0 auto', padding:'20px 5px' ,width: '80%', float: 'right', }} 
      variant='elevation' sx={{}}>
        <h1>Cliente</h1>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField label='Nome' required placeholder='Digite seu Nome' variant='outlined' fullWidth />
              </Grid>
              <Grid xs={12} item>
                <TextField type='email' label='E-mail' required placeholder='Digite seu E-mail' variant='outlined' fullWidth />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label='Nascimento' required placeholder='Digite seu ano de Nascimento' variant='outlined' fullWidth />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label='CPF' required placeholder='Digite seu CPF' variant='outlined' fullWidth />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField type='password' label='Senha' required placeholder='Digite sua Senha' variant='outlined' fullWidth />
                
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField type='password' label='Confirmar Senha' required placeholder='Digite sua senha novamente' variant='outlined' fullWidth />
              </Grid>
              <Grid xs={12} item>
                <Button type='submit' variant='contained' color='success'> Cadastrar </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>

  )
};
