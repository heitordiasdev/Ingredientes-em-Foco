import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material';

const cadastrar = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          display: 'flex',
          height: '50vh',
          overflow: 'auto'
        }}>
        <Box
          sx={{
            margin: 'auto'
          }}>
          <Typography sx={{
            color: '#52691F',
            fontSize: '25pt',
            textAlign: 'center',
            fontWeight: 'bolder',
          }}>
            Deseja cadastrar algum produto?
          </Typography>

          <Typography sx={{
            color: '#453F38',
            fontSize: '12pt',
            textAlign: 'center',
            fontWeight: 'bolder',
            marginTop: '30px',
            // borderBottom: '1px solid red'
          }}>
            Para cadastrar algum produto é necessário fazer login
          </Typography>

          <Stack>
            <Button sx={{
              width: '110px',
              margin: 'auto',
              marginTop: '40px',
              backgroundColor: '#4BB543',
              '&:hover': {
                backgroundColor: '#388e3c',
              },
            }}>Cadastrar</Button>
          </Stack>
        </Box>
      </Box>
    </div>
  )
}

export default cadastrar