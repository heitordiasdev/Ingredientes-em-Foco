import { Typography, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TableUser } from '../../../components/TableUser';
import { usersAll } from '../../../services/userService';



export default function UserAdmin() {
    const [users, setUsers] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() =>{
        async function loadUsers(){
          const response = await usersAll();
          setUsers(response)
          setLoading(false);
        }
        loadUsers();
      },[]);
    

    return (
      <Stack sx={{ display: 'flex', overflow: 'auto',mt:'50px', alignItems: 'center'}}>
        <Typography sx={{ fontSize: 40,  color: '#E52928', textAlign:'center', fontWeight:'bolder'}} >GERENCIAR CLIENTES</Typography>
        <TableUser users={users} loading={loading}/>
      </Stack>

  );
};