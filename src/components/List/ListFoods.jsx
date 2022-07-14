import React from "react";
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, LinearProgress, Typography, Button } from '@mui/material';
import MenuLateral from '../MenuLateral';


const ListFoods = ({ foods, loading }) => {
  return (
    <Box sx={{display: 'flex', flexDirection:'row', height:'79vh'}}>
      <Box sx={{alignSelf: 'center', p:5}}>
          <List>
            <MenuLateral icon={'person'} label={'USUARIOS'} to={'/home-admin/user-admin'}/>
            <MenuLateral icon={'storefront'} label={'FORNECEDORES'} to={'/provider'}/>
            <MenuLateral icon={'restaurantmenu'} label={'PRODUTOS'} to={'/home-admin'}/>
          </List>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor:'#0000001C'}}>
        <Typography sx={{ fontSize: 40,  color: '#E52928', textAlign:'center', fontWeight:'bolder'}} >LISTA DE PRODUTOS</Typography>
        <Paper className sx={{ borderRadius: '37px', mt:'50px'}}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
              <TableContainer component={Paper} sx={{ borderRadius: '37px'}}>
              <Button variant="contained" sx={{backgroundColor:'#52691F', color: 'white', margin:2, borderRadius: '37px'}} >Novo Produto</Button>
                {loading?(<LinearProgress style={{width:'50%', margin:'20px auto'}}  />):(
                <Table className aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{backgroundColor:'#E4E4E4'}}>
                      <TableCell align="center">ID</TableCell>
                      <TableCell align="center">NOME</TableCell>
                    </TableRow>
                  </TableHead>
                  {
                    foods.data ?
                        foods.data.map((row) => (
                          <TableBody sx={{ borderRadius: '37px' }}>
                            <TableRow key={row.id}>
                              <TableCell align="center">{row.id}</TableCell>
                              <TableCell component="th"  align="center" scope="row">{row.name}</TableCell>
                            </TableRow>
                          </TableBody>
                        )
                      ): (<>{foods.message}</>)
                  }
                </Table>)}
              </TableContainer>
              </Grid>
            </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default ListFoods;