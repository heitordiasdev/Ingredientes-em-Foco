import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box} from '@mui/material';
import { CardFood } from '../../../components/CardFood';
import { filterFoodIngredient } from '../../../services/foodService';

export default function FoodFilterIngredient() {
  const {product} = useParams();
  const [food, setFood] = useState([]);

  useEffect(() =>{
    async function loadFood(){
      const response = await filterFoodIngredient('leite', product);
      console.log(product);
      setFood(response)
    }
    loadFood();
  },[product]);

    return(
      <Box sx={{display: 'flex', overflow: 'auto', backgroundColor:'#0000001C'}}>
      <Box sx={{ flexGrow: 1, p: 3, }}>
        <CardFood food={food}/>
      </Box>
    </Box>
    )
};
