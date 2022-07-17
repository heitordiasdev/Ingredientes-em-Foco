import React from "react";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, LinearProgress, Typography, Button } from '@mui/material';
import MenuLateral from '../MenuLateral';
import FormNewProd from '../Forms/addFoods';
import FormEditProd from '../Forms/editFoods';
import { useState } from 'react';

const ListFoods = ({ foods, loading }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editedItem, setEditedItem] = useState({});
  const [msg, setMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const editProdOpen = async (item) => {
    // console.log('Pra editar item',item)
    const info = item.infoNutritional.length>0?JSON.parse(item.infoNutritional):[]
    setEditedItem({id:item.id, name:item.name, manufacturer:item.manufacturer, ingredients:item.ingredients, infoNutritional:info })
    // console.log('Pra editar',editedItem)
    setOpenEdit(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const showMessage = (message) => {
    console.log('message', message)
    setMessage(message)
  };

  return (
    <Box sx={{display: 'flex', flexDirection:'row', minHeight:'79vh'}}>
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
            <Grid container spacing={3} >
              <Grid item xs={12} sm={12}>
              <TableContainer component={Paper} sx={{ borderRadius: '37px'}}>
                <Grid xs={12} sm={12} sx={{ display:'inline-flex'}}>
                  <Button xs={4} sm={4} variant="contained" sx={{backgroundColor:'#52691F', color: 'white', margin:2, borderRadius: '37px'}} onClick={handleClickOpen} >Novo Produto</Button>
                  {msg.length >0 ?(
                    <DialogContentText xs={8} sm={8} onClick={()=>showMessage('')} sx={{ color: '#52691F' ,alignSelf: 'center' ,float:'rigth'}}>{msg}</DialogContentText>
                  ):(<></>)}
                </Grid>
              <FormNewProd open={open} setOpen={setOpen} message={showMessage}/>
              <FormEditProd open={openEdit} setOpen={setOpenEdit} message={showMessage} item={editedItem}/>
                {loading?(<LinearProgress style={{width:'50%', margin:'20px auto'}}  />):(
                <Table className aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{backgroundColor:'#E4E4E4'}}>
                      <TableCell align="center">ID</TableCell>
                      <TableCell align="center">NOME</TableCell>
                      <TableCell align="center">INGREDIENTES</TableCell>
                      <TableCell align="center">AÇÕES</TableCell>
                    </TableRow>
                  </TableHead>
                  {foods.data ?
                    foods.data.map((row) => (
                      <TableBody sx={{ borderRadius: '37px' }}>
                        <TableRow key={row.id}>
                          <TableCell align="center">{row.id}</TableCell>
                          <TableCell component="th"  align="center" scope="row">{row.name}</TableCell>
                          <TableCell component="th"  align="center" scope="row">{row.ingredients}</TableCell>
                          <TableCell component="th"  align="center" scope="row"><ModeEditIcon onClick={()=>editProdOpen(row)}></ModeEditIcon>
                          </TableCell>
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