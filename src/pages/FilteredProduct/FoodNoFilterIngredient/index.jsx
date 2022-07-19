import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box} from '@mui/material';
import { CardFood } from '../../../components/CardFood';
import { filterFoodNoIngredient } from '../../../services/foodService';

export default function FoodNoFilterIngredient() {
  const {product,ingredient} = useParams();
  const [food, setFood] = useState([]);

  useEffect(() =>{
    async function loadFood(){
      const response = await filterFoodNoIngredient(product, ingredient);
      setFood(response)
    }
    loadFood();
  },[product,ingredient]);

    return(
      <Box sx={{display: 'flex', overflow: 'auto', backgroundColor:'#0000001C'}}>
      <Box sx={{ flexGrow: 1, p: 3, }}>
        <CardFood food={food}/>
      </Box>
    </Box>
    )
};