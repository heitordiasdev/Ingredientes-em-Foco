import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Button, CardContent, Grid, Typography, Alert, Box, Link} from '@mui/material';
import { AuthContext } from '../../contexts/AuthContext';
import { StyledBox, StyledTypography, StyledCard } from './styled';


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
        navigate('/')
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
      <StyledTypography variant="h2" component="h2" >
        Bem-vindo(a) <br />
        à Nossa Comunidade
        <Typography variant='h5' sx={{ marginTop: '3%' }}>
          Entre na sua conta agora mesmo!
        </Typography>
      </StyledTypography>
      <StyledCard variant='elevation' sx={{border: 1, borderColor: 'white'}}>
        <Typography variant='h3' sx={{ color: 'white', width: '30%', marginTop: '10px', marginLeft: '35%', borderRadius: '15px', fontSize: 30, fontWeight: 'bold' }}>
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
                <Button onClick={handleLogin} size='large' variant='contained' color='success' sx={{marginBottom: '3%'}}> Login </Button>
      
              </Grid>
              <Grid xs={12}>
              <Typography variant='h8' sx={{margin: 'auto',marginRight: '1%',color: 'white'}}>
                  Não possui cadastro?
              </Typography>
              <Link onClick={ClickRegister} underline="hover" sx={{cursor: 'pointer', color: '#228B22', fontWeight: 'bold'}}>
                Crie uma conta
              </Link>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </StyledCard>

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