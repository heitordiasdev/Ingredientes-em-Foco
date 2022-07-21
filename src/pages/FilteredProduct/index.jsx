import React from 'react';
import { Box, Typography } from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import FilterFood from '../../components/FilterFood';
import HeaderGlobal from '../../components/Headerglobal';


export default function FilteredProduct() {
  const {product} = useParams();

    return(
      <>
      <HeaderGlobal></HeaderGlobal>
      <Box sx={{display: 'flex', overflow: 'auto', height: '74vh', backgroundColor:'#0000001C' }}>
        <Box sx={{width:'20%', alignSelf: 'center', p:3 }}>
          <FilterFood to1={'food-filter-ingredient'} to2={'food-filter-no-ingredient'} to3={`food-filter`} />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography sx={{ fontSize: 35,  color: '#453F38', textAlign:'center'}} >Pesquisando por: <Typography sx={{ fontSize: 35,  color: '#453F38', textAlign:'center', fontWeight:'bolder'}} >{' '}{product}</Typography> </Typography>
          <Outlet />
        </Box>
        
      </Box>
      </>

    )
}