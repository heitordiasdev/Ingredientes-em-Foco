import React, { useEffect, useState } from 'react';
import { foodAll } from '../../services/foodService';
import { Box } from '@mui/material';
import { CardFood } from '../../components/CardFood';
import FilterFood from '../../components/FilterFood';
import HeaderGlobal from '../../components/Headerglobal';

export default function HomeProducts() {
  const [food, setFood] = useState([]);

  useEffect(() =>{
    async function loadFood(){
      const response = await foodAll();
      setFood(response)
    }
    loadFood();
  },[]);

    return(
      <>
      <HeaderGlobal></HeaderGlobal>
      <Box sx={{display: 'flex', overflow: 'auto', backgroundColor:'#0000001C'}}>
        <Box sx={{width:'20%', alignSelf: 'start', p:5}}>
          <FilterFood to1={'/home-products-filter-ingredient'} to2={'/home-products-no-ingredient'} to3={'/home-products'}/>
        </Box>
        <Box sx={{ flexGrow: 1, p: 3, }}>
          <CardFood food={food}/>
        </Box>
      </Box>
      </>
    );
}