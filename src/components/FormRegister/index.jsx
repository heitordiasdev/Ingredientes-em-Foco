import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import {createUser} from '../../service/userRegister'


export default function FormRegister() {

  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [cpfCnpj, setCpfCnpj] = useState()
  const [email, setEmail] = useState()
  const [dateNasc, setDateNasc]= useState()

  const userSubmit = async () => {
    await createUser(name, cpfCnpj, email, password, dateNasc);
    console.log(createUser)
  }

  return (
    
    <div align='center' >
      <Card style={{ maxWidth:'450', margin:'0 auto', padding:'20px 5px' ,width: '80%', float: 'right', background:'transparent' }} 
      variant='elevation' sx={{}}>
        <h1>Cliente</h1>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField label='Nome' required placeholder='Digite seu Nome' variant='outlined' fullWidth onChange={(event) => setName(event.target.value)}/>
              </Grid>
              <Grid xs={12} item>
                <TextField type='email' label='E-mail' required placeholder='Digite seu E-mail' variant='outlined' fullWidth onChange={(event) => setEmail(event.target.value)} />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label='Nascimento' required placeholder='Digite seu ano de Nascimento' variant='outlined' fullWidth onChange={(event) => setDateNasc(event.target.value)}/>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label='CPF' required placeholder='Digite seu CPF' variant='outlined' fullWidth onChange={(event) => setCpfCnpj(event.target.value)}/>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField type='password' label='Senha' required placeholder='Digite sua Senha' variant='outlined' fullWidth />
                
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField type='password' label='Confirmar Senha' required placeholder='Digite sua senha novamente' variant='outlined' fullWidth onChange={(event) => setPassword(event.target.value)}/>
              </Grid>
              <Grid xs={12} item>
                <Button onClick={userSubmit} type='submit' variant='contained' color='success'> Cadastrar </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>

  );
};
