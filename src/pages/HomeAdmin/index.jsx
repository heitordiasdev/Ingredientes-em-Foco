import { Box, Container, ImageList, Card, Button, Tooltip, CardContent, CardMedia, Typography, List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MenuLateral from '../../components/MenuLateral';
import { foodAll } from '../../services/foodService';
import Food from '../../assets/Food.png';


export default function HomeAdmin() {

  const [food, setFood] = useState([]);

  useEffect(() =>{
      async function loadFood(){
        const response = await foodAll();
        setFood(response)
      }
      loadFood();
    },[]);


    return (
    <Box sx={{display: 'flex', overflow: 'auto', height: '74vh'}}>
        <Box sx={{width:'20%', alignSelf: 'center', p:5}}>
          <List>
            <MenuLateral icon={'person'} label={'USUARIOS'} to={'/home-admin/user-admin'}/>
            <MenuLateral icon={'storefront'} label={'FORNECEDORES'} to={'/home-admin/user-admin'}/>
            <MenuLateral icon={'restaurantmenu'} label={'PRODUTOS'} to={'/home-admin'}/>
          </List>
        </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor:'#0000001C' }}>
      <Typography sx={{ fontSize: 40,  color: '#E52928', textAlign:'center', fontWeight:'bolder'}} >CATÁLOGO DE PRODUTOS</Typography>
      <Container maxWidth="xl">
        <ImageList cols={4}>
          {food.map((item) => (
           <Card sx={{ maxWidth: 300, borderRadius: '37px' }}>
           <CardMedia
             component="img"
             height="140"
             image={Food}
             alt="food"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div" sx={{ textAlign:'center'}}>
               {item.name}
             </Typography>
             <Typography sx={{ fontSize: 20, color: '#6E9440', fontWeight:'bolder'}}>
               Fabricante:
             </Typography>
             <Typography sx={{ fontSize: 20}}>
               {item.manufacturer}
             </Typography>
             <Tooltip title={item.ingredients} >
              <Button><Typography sx={{ fontSize: 20, color: '#6E9440', fontWeight:'bolder'}}>
              Ingredientes:
             </Typography>
             </Button>
             </Tooltip>
             <Typography sx={{ fontSize: 20, color: '#6E9440', fontWeight:'bolder'}}>
               Informações Nutricionais:
             </Typography>
           </CardContent>
         </Card>
   ))}
   
 </ImageList>
 </Container>
      </Box>
    </Box>
  );
};