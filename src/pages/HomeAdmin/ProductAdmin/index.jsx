import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { CardFood } from '../../../components/CardFood';
import { foodAll } from '../../../services/foodService';

export default function ProductAdmin() {
    const [food, setFood] = useState([]);
  
    useEffect(() =>{
      async function loadFood(){
        const response = await foodAll();
        setFood(response)
      }
      loadFood();
    },[]);
  
      return(
        <Stack sx={{ display: 'flex', overflow: 'auto',mt:'50px', alignItems: 'center'}}>
          <Typography sx={{ fontSize: 40,  color: '#E52928', textAlign:'center', fontWeight:'bolder'}} >CATÁLOGO DE PRODUTOS</Typography>
          <CardFood food={food}/>
        </Stack>
      );
  };