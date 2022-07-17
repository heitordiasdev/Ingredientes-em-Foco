import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, Grid, Typography, Alert, styled, Box } from '@mui/material';
import Login from '../../assets/Register.png';


const StyledBox = styled(Box)(
  {
    backgroundImage: `url(${Login})`,
    backgroundSize: 'cover',
    height: '80vh',
  }
);

export default function FormLogin() {

  const [alert, setAlert] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  
  return (

    <StyledBox>
      <Typography variant="h2" component="h2" sx={{ float: 'left', marginTop: '15%', marginLeft: '16%', color: 'white', fontWeight: 'bold', }}>
        Bem-vindo(a) <br />
        à Nossa Comunidade
        <Typography variant='h5' sx={{ marginTop: '3%' }}>
          Entre na sua conta agora mesmo!
        </Typography>
      </Typography>
      <Card sx={{
        border: 1,
        textAlign: 'center',
        float: 'right',
        marginRight: '15%',
        marginTop: '10%',
        width: '25%',
        background: 'transparent',
        borderRadius: '10px',
        borderColor: 'white'
      }}
        variant='elevation'>

        <Typography variant='h3' sx={{ color: 'white', width: '30%', marginLeft: '35%', borderRadius: '15px', fontSize: 30, fontWeight: 'bold' }}>
          Login
        </Typography>
        <CardContent>
          <form onSubmit={() => setAlert(true)}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField sx={{ backgroundColor: 'white' }} type='email' label='E-mail' required placeholder='Digite seu E-mail' variant='outlined' fullWidth onChange={(event) => setEmail(event.target.value)} />
              </Grid>
              <Grid xs={12} item>
                <TextField sx={{ backgroundColor: 'white' }} type='password' label='Senha' required placeholder='Digite sua Senha' variant='outlined' fullWidth onChange={(event) => setPassword(event.target.value)} />
              </Grid>
              <Grid>
                <Typography variant='h7' sx={{ padding: '10px', float: 'left', color: 'red' }}>
                  * Campos Obrigatórios
                </Typography>
              </Grid>
              <Grid xs={12} item>
                <Button size='large' type='submit' variant='contained' color='success'> Login </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>

      </Card>

      {alert && (
        <Box sx={{ float: 'right', padding: '1em', marginTop: '480px', marginRight: '-400px' }}>
          <Alert sx={{}} variant="filled" severity="success">
            Usuário logado com sucesso!
          </Alert>
        </Box>
      )}
    </StyledBox>

  );
};