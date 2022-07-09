import * as React from 'react';
import { Typography, Container, Box } from '@mui/material';


export default function Footer() {
  return (
      <Box
        component="footer"
        sx={{
          position: 'static',
          height: '8vh',
          py: 3,
          px: 2,
          mt: '100vh',
          backgroundColor:'#52691F'
        }}
      >
        <Container maxWidth="sm">
        <Typography variant="body1" color="#FFFFFF">
            {'Copyright © '}
            Ingredientes em Foco. Todos os direitos reservados.
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        </Container>
      </Box>
  );
}