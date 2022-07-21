import React from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress, Button } from '@mui/material';

export function TableUser({users, loading}){
 return (
    <>
    <Paper className sx={{ borderRadius: '37px',  width:'100%'}}>
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
                            <TableCell align="right">
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