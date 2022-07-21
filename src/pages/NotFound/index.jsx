import React from 'react';
import { Typography, Button } from '@mui/material';


function NotFound()
{
    return (
        <>
         <Typography sx={{ color: '#52691F', fontSize: '30px', textAlign: 'center', fontWeight: 'bolder', minHeight: '80vh' , marginTop:'15rem'}}>
            404 - Ops! Página não encontrada
            <div>
                <Button  sx={{ width: '300px', height:'80px', margin: 5, fontSize:'20px', borderRadius:'37px', backgroundColor: '#E52928','&:hover': {backgroundColor: '#E52928',},}} href={'/'}>Ir para página inicial</Button>
            </div>
        </Typography>
        </>
    );
}

export default NotFound;