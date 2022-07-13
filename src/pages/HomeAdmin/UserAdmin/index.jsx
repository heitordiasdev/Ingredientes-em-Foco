import { Toolbar, Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, List, Typography,ButtonGroup, Chip, LinearProgress, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { usersAll } from '../../../services/userService';
import MenuLateral from '../../../components/MenuLateral';



export default function UserAdmin() {
    const [usuarios, setUsuarios] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() =>{
        async function loadUsuarios(){
          const response = await usersAll();
          console.log(response)
          setUsuarios(response)
          setLoading(false);
        }
        loadUsuarios();
      },[]);
    

    return (
  
    <Box sx={{ display: 'flex', overflow: 'auto'}}>
        <Box sx={{alignSelf: 'center', p:5}}>
          <List>
            <MenuLateral icon={'home'} label={'USUARIOS'} to={'/home-admin/user-admin'}/>
          </List>
        </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor:'#0000001C'}}>
    
            <Paper className>
                <h2>Listagem de Usuários</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                  <TableContainer component={Paper}>
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
                      <TableBody>
                        {usuarios.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="right">
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>)}
                  </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
      </Box>
    </Box>
  );
};