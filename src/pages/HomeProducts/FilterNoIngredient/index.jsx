import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { CardFood } from '../../../components/CardFood';
import FilterFood from '../../../components/FilterFood';
import { filterNoIngredient } from '../../../services/foodService';
import HeaderGlobal from '../../../components/Headerglobal';


export default function FilterNoIngredient() {
    const {ingredient} = useParams();
    const [food, setFood] = useState([]);

    useEffect(() =>{
        async function loadFood(){
          const response = await filterNoIngredient(ingredient);
          setFood(response)
        }
        loadFood();
      },[ingredient]);
    
      return(
      <>
      <HeaderGlobal></HeaderGlobal>
        <Box sx={{display: 'flex', overflow: 'auto', backgroundColor:'#0000001C'}}>
        <Box sx={{width:'20%', alignSelf: 'center', p:5}}>
          <FilterFood to1={'/home-products-filter-ingredient'} to2={'/home-products-no-ingredient'} to3={'/home-products'}/>
        </Box>
        <Box sx={{ flexGrow: 1, p: 3, }}>
          <CardFood food={food}/>
        </Box>
      </Box>
       </>
      );
}