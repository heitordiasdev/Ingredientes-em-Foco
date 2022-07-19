import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, Grid, Typography, Alert, styled, Box} from '@mui/material';
import Login from '../../assets/Register.png';
import { AuthContext } from '../../contexts/AuthContext';

const StyledBox = styled(Box)(
  {
    backgroundImage: `url(${Login})`,
    backgroundSize: 'cover',
    height: '80vh',
  }
);


export default function FormLogin() {

  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const auth = useContext(AuthContext);

  const handleLogin = async () =>{
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        if(email === 'admin@gmail.com'){
          navigate("/home-admin");
        } else{
          navigate("/home-user");
        } 
      } else {
        console.log('deu ruim');
      }
    }
  };
  
  const ClickRegister = () => {
    navigate('/register')
  }
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
                <Button size='large' type='button' variant='contained' color='success' onClick={handleLogin}> Login </Button>
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

      <Box>
      <Typography variant='h5' sx={{color: 'white', paddingTop: '590px', marginLeft: '800px'}}>
          Ainda não possui uma conta?
        </Typography>
      <Typography variant='h7' sx={{color: 'black', marginLeft: '800px'}}>
          Clique aqui para cadastrar!
      </Typography>
      <Grid>
      <Button size='large' variant='contained' color='success' sx={{margin: 'auto', marginLeft: '850px', marginTop: '20px',
      backgroundColor: '#388e3c', '&:hover': {backgroundColor: '#2e7d32',},}} onClick={ClickRegister}> Cadastre-se </Button>
      </Grid>
      </Box>
    </StyledBox>
  );
};