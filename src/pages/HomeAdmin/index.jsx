import { Box, List, Typography } from '@mui/material';
import React, { useContext } from 'react';
import MenuLateral from '../../components/MenuLateral';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import HeaderGlobal from '../../components/Headerglobal';


export default function HomeAdmin() {

    const auth = useContext(AuthContext);

    return (
  <>
   <HeaderGlobal></HeaderGlobal>
    <Box sx={{display: 'flex', overflow: 'auto', height: '74vh', backgroundColor:'#0000001C'}}>
        <Box sx={{width:'20%', alignSelf: 'center', p:5}}>
          <List>
            <MenuLateral icon={'person'} label={'USUARIOS'} to={'user-admin'}/>
            <MenuLateral icon={'storefront'} label={'FORNECEDORES'} to={'provider-admin'}/>
            <MenuLateral icon={'restaurantmenu'} label={'PRODUTOS'} to={'product-admin'}/>
          </List>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography sx={{fontSize: 35,  color: '#453F38', textAlign:'center', fontWeight:'bolder'}}>
          Bem vindo(a) {auth.user.name}!
        </Typography>
        <Outlet />
      </Box>
    </Box> 
  </>
  );
};