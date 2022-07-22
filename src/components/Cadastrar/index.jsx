import React from 'react'
import { Box, Stack } from '@mui/material';
import { StyledTypography1, StyledTypography2, StyledButton } from './styled';

export function Cadastrar(){
  return (
    <div>
      <Box sx={{backgroundColor: '#F5F5F5', display: 'flex', height: '50vh', overflow: 'auto'}}>
        <Box sx={{ margin: 'auto' }}>
          <StyledTypography1 >
            Deseja cadastrar algum produto?
          </StyledTypography1>
          <StyledTypography2 >
            Para cadastrar algum produto é necessário fazer login
          </StyledTypography2>
          <Stack>
            <StyledButton sx={{  
            }}>Cadastrar</StyledButton>
          </Stack>
        </Box>
      </Box>
    </div>
  )
}