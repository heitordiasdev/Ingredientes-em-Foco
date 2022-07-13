import { AppBar, Toolbar, styled, InputBase } from '@mui/material';
import React from "react";
import Box from '@mui/material/Box';
import Logo from '../../assets/Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

const StyledToolbar = styled(Toolbar)({
    height: "120px",
    backgroundColor:"#E4E4E4",
    display:"flex",
    justifyContent:"space-between"
})

const Icons = styled("Box")(({theme}) => ({
    padding: "0 10px",
}));


const Navbar = () => {
    return (
      <AppBar position="stick">
        <StyledToolbar>
            <Box component="img" sx={{height:120}} alt="ingredients in foco" src={Logo}/>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '40%', borderRadius: '37px' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder=" Pesquise um produto"
                    inputProps={{ 'aria-label': 'pesquise um produto' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon sx={{color:'#747374'}} />
                </IconButton>
            </Paper>
            <Icons>
                <IconButton>
                    <PersonIcon sx={{ fontSize: 40,  color: '#E52928', p:'2px'}}/> Entrar/Cadastrar
                </IconButton>
            </Icons>
        </StyledToolbar>
      </AppBar> 
    )
}
export default Navbar