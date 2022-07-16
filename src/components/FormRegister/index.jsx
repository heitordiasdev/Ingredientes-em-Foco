import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, Grid, Typography, Alert, styled, Box } from '@mui/material';
import { createUser } from '../../service/userRegister';
import Register from '../../assets/Register.png';


const StyledBox = styled(Box)(
  {
    backgroundImage: `url(${Register})`,
    backgroundSize: 'cover',
    height: '80vh',
  }
);

export default function FormRegister() {

  const [alert, setAlert] = useState(false);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [cpfCnpj, setCpfCnpj] = useState();
  const [email, setEmail] = useState();
  const [dateNasc, setDateNasc] = useState();

  const userSubmit = async () => {
    await createUser(name, cpfCnpj, email, password, dateNasc);
    console.log(createUser)
  };
  
  return (

    <StyledBox>
      <Typography variant="h2" component="h2" sx={{ float: 'left', marginTop: '15%', marginLeft: '16%', color: 'white', fontWeight: 'bold', }}>
        Bem-vindo(a) <br />
        à Nossa Comunidade
        <Typography variant='h5' sx={{ marginTop: '3%' }}>
          Crie sua conta agora mesmo!
        </Typography>
      </Typography>
      <Card sx={{
        border: 1,
        textAlign: 'center',
        float: 'right',
        marginRight: '10%',
        marginTop: '8%',
        width: '35%',
        background: 'transparent',
        borderRadius: '10px',
        borderColor: 'white'
      }}
        variant='elevation'>

        <Typography variant='h3' sx={{ color: 'white', width: '30%', marginLeft: '35%', borderRadius: '15px', fontSize: 30, fontWeight: 'bold' }}>
          Cadastre-se
        </Typography>
        <CardContent>
          <form onSubmit={() => setAlert(true)}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField sx={{ backgroundColor: 'white' }} label='Nome' required placeholder='Digite seu Nome' variant='outlined' fullWidth onChange={(event) => setName(event.target.value)} />
              </Grid>
              <Grid xs={12} item>
                <TextField sx={{ backgroundColor: 'white' }} type='email' label='E-mail' required placeholder='Digite seu E-mail' variant='outlined' fullWidth onChange={(event) => setEmail(event.target.value)} />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField sx={{ backgroundColor: 'white' }} label='Nascimento' required placeholder='Digite seu ano de Nascimento' variant='outlined' fullWidth onChange={(event) => setDateNasc(event.target.value)} />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField sx={{ backgroundColor: 'white' }} label='CPF' required placeholder='Digite seu CPF' variant='outlined' fullWidth onChange={(event) => setCpfCnpj(event.target.value)} />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField sx={{ backgroundColor: 'white' }} type='password' label='Senha' required placeholder='Digite sua Senha' variant='outlined' fullWidth />

              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField sx={{ backgroundColor: 'white' }} type='password' label='Confirmar Senha' required placeholder='Digite sua senha novamente' variant='outlined' fullWidth onChange={(event) => setPassword(event.target.value)} />
              </Grid>

              <Grid>
                <Typography variant='h7' sx={{ padding: '10px', float: 'left', color: 'red' }}>
                  * Campos Obrigatórios
                </Typography>
              </Grid>
              <Grid xs={12} item>
                <Button size='large' onClick={userSubmit} type='submit' variant='contained' color='success'> Cadastrar </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>

      </Card>

      {alert && (
        <Box sx={{ float: 'right', padding: '1em', marginTop: '600px', marginRight: '-500px' }}>
          <Alert sx={{}} variant="filled" severity="success">
            Usuário cadastrado com sucesso!
          </Alert>
        </Box>
      )}

    </StyledBox>

  );
};
