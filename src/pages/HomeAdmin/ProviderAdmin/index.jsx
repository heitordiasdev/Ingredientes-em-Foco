import { Typography, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TableProvider } from '../../../components/TableProvider';
import { usersAll } from '../../../services/userService';



export default function ProviderAdmin() {
    const [providers, setProviders] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() =>{
        async function loadProviders(){
          const response = await usersAll();
          setProviders(response)
          setLoading(false);
        }
        loadProviders();
      },[]);
    

    return (
      <>
      <Stack sx={{ display: 'flex', overflow: 'auto',mt:'50px', alignItems: 'center'}}>
        <Typography sx={{ fontSize: 40,  color: '#E52928', textAlign:'center', fontWeight:'bolder'}} >GERENCIAR FORNECEDORES</Typography>
        <TableProvider users={providers} loading={loading}/>
      </Stack>
     </>
  );
};