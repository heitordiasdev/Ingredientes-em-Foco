import React, { useState } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress, Button } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditUser from '../Forms/editUser';
import AddUser from '../Forms/addUser';
import ConfirmDialog from '../Forms/confirm';
import { deleteUser } from '../../services/userService';

export function TableUser({users, loading}){
  const[user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [openAddUser, setOpenAddUse] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [deletePerson, setDeletePerson] = useState('');

  const openDialogEdit = (id) => {
    setUser(users.find((use)=> use.id === id));
    setOpen(true);
  }

  const openDialogAddUser = () => {
    setOpenAddUse(true);
  }

  const askDeleteProd = (id) => {
    setOpenConfirm(true);
    setDeletePerson(id)
  };

  const deleteProd = async () => {
    setOpenConfirm(false);
    console.log(deletePerson)
    await deleteUser(deletePerson)
    setDeletePerson('')
  };


 
 return (
    <>
    <AddUser open={openAddUser} setOpen={setOpenAddUse}/>
    <EditUser open={open} setOpen={setOpen} user={user}/>
    <ConfirmDialog open={openConfirm} setOpen={setOpenConfirm} confirm={deleteProd} ></ConfirmDialog>
    <Paper className sx={{ borderRadius: '37px',  width:'100%'}}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                  <TableContainer component={Paper} sx={{ borderRadius: '37px'}}>
                  <Button variant="contained" sx={{backgroundColor:'#52691F', color: 'white', margin:2, borderRadius: '37px'}} onClick={openDialogAddUser}>Novo Usuario</Button>
                    {loading?(<LinearProgress style={{width:'50%', margin:'20px auto'}}  />):(
                    <Table className aria-label="simple table">
                      <TableHead>
                        <TableRow sx={{backgroundColor:'#E4E4E4'}}>
                          <TableCell align="center">ID</TableCell>
                          <TableCell align="center">NOME</TableCell>
                          <TableCell align="center">EMAIL</TableCell>
                          <TableCell align="center">CPF</TableCell>
                          <TableCell align="center">NASCIMENTO</TableCell>
                          <TableCell align="center">STATUS</TableCell>
                        </TableRow>
                      </TableHead>
                      {users.map((row) => (
                          (row.cpfCnpj).length === 11 ? (
                      <>
                      <TableBody sx={{ borderRadius: '37px' }}>
                          <TableRow key={row.id}>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.cpfCnpj}</TableCell>
                            <TableCell align="center">{row.dateNasc}</TableCell>
                            <TableCell component="th"  align="center" scope="row">
                              <ModeEditIcon onClick={()=>openDialogEdit(row.id)} sx={{cursor:'pointer'}} />
                              <DeleteIcon onClick={()=>askDeleteProd(row.id)} sx={{cursor:'pointer'}}/>
                            </TableCell>
                          </TableRow>
                      </TableBody>
                      </>
                       ):(<></>)
                       ))}
                    </Table>)}
                  </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
    </>
   
 );   
}