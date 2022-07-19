import React, { useEffect, useState } from 'react';
import { foodAll } from '../../services/foodService';
import { Box, Typography, Button } from '@mui/material';
import { CardFood } from '../../components/CardFood';
import FilterFood from '../../components/FilterFood';
import { useNavigate } from "react-router-dom";

export default function HomeProducts() {
  const navigate = useNavigate();
  const [food, setFood] = useState([]);

  useEffect(() =>{
    async function loadFood(){
      const response = await foodAll();
      setFood(response)
    }
    loadFood();
  },[]);

  const Click = () => {
    navigate('/home-admin')
  }

    return(
      <>
      <Box sx={{display: 'flex', overflow: 'auto', backgroundColor:'#0000001C'}}>
        <Box sx={{width:'20%', alignSelf: 'center', p:5}}>
          <FilterFood to1={'/home-products-filter-ingredient'} to2={'/home-products-no-ingredient'} to3={'/home-products'}/>
        </Box>
        <Box sx={{ flexGrow: 1, p: 3, }}>
          <CardFood food={food}/>
        </Box>
      </Box>
      <Box sx={{margin:5}}>
      <Typography sx={{ color: '#52691F', fontSize: '30px', textAlign: 'center', fontWeight: 'bolder'}}>
          Deseja cadastrar algum produto?
        </Typography>
        <Typography sx={{ color: '#453F38', fontSize: '25px', textAlign: 'center', fontWeight: 'bolder', marginTop: '30px'}}>
          Cadastre-se em nossa comunidade:
          <Button onClick={Click} sx={{ width: '300px', height:'80px', margin: 5, fontSize:'20px', borderRadius:'37px', backgroundColor: '#E52928','&:hover': {backgroundColor: '#E52928',},}}>
            Cadastrar
          </Button>
        </Typography>
      </Box>
      </>
    );
}