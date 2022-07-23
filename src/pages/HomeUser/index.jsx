import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { CardFood } from '../../components/CardFood';
import { foodAll } from '../../services/foodService';
import { AuthContext } from '../../contexts/AuthContext';
import HeaderGlobal from '../../components/Headerglobal';

export default function HomeUser() {

  const [food, setFood] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    async function loadFood() {
      const response = await foodAll();
      setFood(response);
      console.log(response);
    }
    loadFood();
  }, []);

  return (  
    <>
    <HeaderGlobal></HeaderGlobal>
      <Box sx={{backgroundColor: '#E4E4E4', display: 'flex', height: '100%', overflow: 'auto'}}>
        <Box sx={{ width: '30%' }}>
          <Typography sx={{ color: '#52691F', fontSize: '30pt', textAlign: 'center', fontWeight: 'bolder', marginTop: '30px'}}>
            PRODUTOS
          </Typography>;
        </Box>
        <Box sx={{ flexGrow: 1, p: 3, marginBottom: '30px' }}>
        <Typography sx={{fontSize: 35,  color: '#453F38', textAlign:'center', fontWeight:'bolder'}}>
          Bem vindo(a) {auth.user.name}!
        </Typography>
          <CardFood food={food}/>
        </Box>
      </Box>
    </>
  )
};