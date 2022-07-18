import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, LinearProgress, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { usersAll } from '../../../services/userService';
import MenuLateral from '../../../components/MenuLateral';



export default function UserAdmin() {
    const [usuarios, setUsuarios] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() =>{
        async function loadUsuarios(){
          const response = await usersAll();
          setUsuarios(response)
          setLoading(false);
        }
        loadUsuarios();
      },[]);
    

    return (
  
    <Box sx={{ display: 'flex', overflow: 'auto', height: '74vh'}}>
        <Box sx={{alignSelf: 'center', p:5}}>
        <List>
            <MenuLateral icon={'person'} label={'USUARIOS'} to={'/home-admin/user-admin'}/>
            <MenuLateral icon={'storefront'} label={'FORNECEDORES'} to={'/home-admin/provider-admin'}/>
            <MenuLateral icon={'restaurantmenu'} label={'PRODUTOS'} to={'/home-admin'}/>
          </List>
        </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor:'#0000001C'}}>
        <Typography sx={{ fontSize: 40,  color: '#E52928', textAlign:'center', fontWeight:'bolder'}} >GERENCIAR CLIENTES</Typography>
            <Paper className sx={{ borderRadius: '37px', mt:'50px'}}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                  <TableContainer component={Paper} sx={{ borderRadius: '37px'}}>
                  <Button variant="contained" sx={{backgroundColor:'#52691F', color: 'white', margin:2, borderRadius: '37px'}} >Novo Usuario</Button>
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
                      {usuarios.map((row) => (
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
                            <TableCell align="right">
                            </TableCell>
                          </TableRow>
                      </TableBody>
                      </>
                       ): (<></>)
                       ))}
                    </Table>)}
                  </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
      </Box>
    </Box>
  );
};