import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, Card, CardContent, Grid, Typography, Alert } from '@mui/material';
import {createUser} from '../../service/userRegister'


export default function FormRegister() {

  const [alert, setAlert] = useState(false)
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [cpfCnpj, setCpfCnpj] = useState()
  const [email, setEmail] = useState()
  const [dateNasc, setDateNasc]= useState()

  const userSubmit = async () => {
    await createUser(name, cpfCnpj, email, password, dateNasc);
    console.log(createUser)
  }
  // margin-right: 10%, width: 50%, float: righ
  return (
    
    <Box>
      <Typography variant="h2" component="h2" sx={{float: 'left', marginTop: '15%', marginLeft: '16%',color: 'white', fontWeight: 'bold',}}>
      Bem-vindo(a) <br/>
      à Nossa Comunidade
      <Typography variant='h5' sx={{marginTop: '3%'}}>
      Crie sua conta agora mesmo!
      </Typography>
      </Typography>
      <Card sx={{border: 1,
      textAlign: 'center',
      float: 'right',
      marginRight: '10%',
      marginTop: '8%',
      width: '35%',
      background: 'transparent',
      borderRadius: '10px',
      borderColor: 'white'}} 
      variant='elevation'>
        <Box>
        <Typography variant='h3' sx={{color: 'white', backgroundColor: 'red', width: '30%', marginLeft: '35%', borderRadius: '15px', fontSize: 30}}>
          Cliente
        </Typography>
        <CardContent>
          <form onSubmit={() => setAlert(true)}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField sx={{backgroundColor: 'white', borderRadius: '20px'}} label='Nome' required placeholder='Digite seu Nome' variant='outlined' fullWidth onChange={(event) => setName(event.target.value)}/>
              </Grid>
              <Grid xs={12} item>
                <TextField sx={{backgroundColor: 'white', borderRadius: '20px'}} type='email' label='E-mail' required placeholder='Digite seu E-mail' variant='outlined' fullWidth onChange={(event) => setEmail(event.target.value)} />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField sx={{backgroundColor: 'white', borderRadius: '20px'}} label='Nascimento' required placeholder='Digite seu ano de Nascimento' variant='outlined' fullWidth onChange={(event) => setDateNasc(event.target.value)}/>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField sx={{backgroundColor: 'white', borderRadius: '20px'}} label='CPF' required placeholder='Digite seu CPF' variant='outlined' fullWidth onChange={(event) => setCpfCnpj(event.target.value)}/>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField sx={{backgroundColor: 'white', borderRadius: '20px'}} type='password' label='Senha' required placeholder='Digite sua Senha' variant='outlined' fullWidth />
                
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField sx={{backgroundColor: 'white', borderRadius: '20px'}} type='password' label='Confirmar Senha' required placeholder='Digite sua senha novamente' variant='outlined' fullWidth onChange={(event) => setPassword(event.target.value)}/>
              </Grid>

              <Grid>
              <Typography variant='h7' sx={{padding: '10px', float: 'left', color: 'red'}}>
              * Campos Obrigatórios
              </Typography>
              </Grid>
              <Grid xs={12} item>
              <Button size='large' onClick={userSubmit} type='submit' variant='contained' color='success'> Cadastrar </Button>

              </Grid>
            </Grid>
          </form>
        </CardContent>
        </Box>
      </Card>

      {alert &&(
      <Box>
      <Alert sx={{float: 'right', padding: '1em', marginTop: '10px', marginRight: '232px' }} variant="filled" severity="success">
        Usuário cadastrado com sucesso!
      </Alert>
      </Box>
      )}

    </Box>

  );
};
