import React, { useState } from 'react';
import { Stack, Typography, InputBase, IconButton, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { StyledTypography, StyledPaper } from './styled';

export default function FilterFood({to1 ,to2 , to3}){
    const[text, setText] = useState('');
    const navigate = useNavigate();
    const [age, setAge] = React.useState('30');

    const handleClick = () => {
        if(age === 10){
            if(text!== ''){
                navigate(`${to1}/${text}`)
            }   
        }
        else if(age === 20){
            if(text!== ''){
                navigate(`${to2}/${text}`)
            }
        }
        else { 
            navigate(to3)
        }
    };

    return(
        <Box>
            <StyledTypography >Filtrar por ingredientes: </StyledTypography>
            <StyledPaper component="form">
                <InputBase
                    sx={{ ml: 1, flex: 1}}
                    placeholder=" Pesquise um produto"
                    inputProps={{ 'aria-label': 'pesquise um produto' }}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
                <SearchIcon sx={{color:'#747374'}} />
                </IconButton>
            </StyledPaper>
         
        <Stack direction="row" spacing={2} sx={{margin:'10px', alignItems: 'center'}}>
        <Typography sx={{ fontSize: 20,  color: '#453F38'}} >Ordenar por: </Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Todos"
                onChange={(event) => setAge(event.target.value)}
            >
                <MenuItem value={10}>Contém</MenuItem>
                <MenuItem value={20}>Não Contém</MenuItem>
                <MenuItem value={30}>Todos</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    </Box>

    );
}