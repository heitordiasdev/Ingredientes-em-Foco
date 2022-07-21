import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
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
       <Box sx={{margin:5}}>
       <Typography sx={{ color: '#52691F', fontSize: '30px', textAlign: 'center', fontWeight: 'bolder'}}>
           Deseja cadastrar algum produto?
         </Typography>
         <Typography sx={{ color: '#453F38', fontSize: '25px', textAlign: 'center', fontWeight: 'bolder', marginTop: '30px'}}>
           Cadastre-se em nossa comunidade:
           <Button href='/login' sx={{ width: '300px', height:'80px', margin: 5, fontSize:'20px', borderRadius:'37px', backgroundColor: '#E52928','&:hover': {backgroundColor: '#E52928',},}}>
             Cadastrar
           </Button>
         </Typography>
       </Box>
       </>
      );
}