import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import DialogContentText from '@mui/material/DialogContentText';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, LinearProgress, Typography, Button, Dialog } from '@mui/material';
import MenuLateral from '../MenuLateral';
import FormNewProd from '../Forms/addFoods';
import FormEditProd from '../Forms/editFoods';
import ConfirmDialog from '../Forms/confirm';
import { useState, useEffect } from 'react';
import { deleteFood }from '../../services/foodService';


const ListFoods = ({ foods, loading , setLoading}) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [deleteItem, setDeleteId] = useState('');
  const [editedItem, setEditedItem] = useState(null);
  const [msg, setMessage] = useState('');
  
  const editProdOpen = (item) => {
    const info = item.infoNutritional.length>0?JSON.parse(item.infoNutritional):[]
    setEditedItem({id:item.id, name:item.name, manufacturer:item.manufacturer, ingredients:item.ingredients, infoNutritional:info })
    setOpenEdit(true);
  };

  const askDeleteProd = (id) => {
    setOpenConfirm(true);
    setDeleteId(id)
  };

  const deleteProd = async () => {
    setOpenConfirm(false);
    const resp = await deleteFood(deleteItem)
    showMessage(resp.message, true)
    setDeleteId('')
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showMessage = (message, refrech) => {
    console.log('message refresh', refrech)
    setMessage(message)
    setLoading()
  };

  useEffect(() => {
    console.log('edited hook', editedItem)
  }, [editedItem])

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{display: 'flex', flexDirection:'row', minHeight:'79vh'}}>
      <FormNewProd open={open} setOpen={setOpen} message={showMessage}/>
      <FormEditProd open={openEdit} setOpen={setOpenEdit} message={showMessage} item={editedItem}/>
      <ConfirmDialog open={openConfirm} setOpen={setOpenConfirm} confirm={deleteProd} ></ConfirmDialog>
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
                  {foods.length > 0 ?(
                    <TableBody sx={{ borderRadius: '37px' }}>
                        { foods.map( (row) => (
                        <TableRow key={row.id}>
                          <TableCell align="center">{row.id}</TableCell>
                          <TableCell component="th"  align="center" scope="row">{row.name}</TableCell>
                          <TableCell component="th"  align="center" scope="row">{row.ingredients}, {JSON.parse(row.infoNutritional)['options']}</TableCell>
                          <TableCell component="th"  align="center" scope="row"><ModeEditIcon onClick={()=>editProdOpen(row)}></ModeEditIcon> <DeleteIcon onClick={()=>askDeleteProd(row.id)} /></TableCell>
                        </TableRow>
                        ))}
                     </TableBody>
                    ): ( 
                        <TableBody  align="center" sx={{ borderRadius: '37px', margin: 'auto' }}>
                            Nenhum produto encontrado
                        </TableBody>
                    )
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