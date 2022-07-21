import { AppBar, Toolbar, styled, InputBase } from '@mui/material';
import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import Logo from '../../assets/Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const StyledToolbar = styled(Toolbar)({
    height: "13vh",
    backgroundColor:"#E4E4E4",
    display:"flex",
    justifyContent:"space-between"
})


const Icons = styled("Box")(({theme}) => ({
    padding: "0 10px",
}));


export default function Navbar(){
    const[text, setText] = useState('');
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const Click = () => {
        navigate('/Login');
    }
    const ClickImage = () => {
        navigate('/');
    }

    const logout = async () => {
        window.location.reload();
        navigate('/');
    };

    const handleClick = () => {
        navigate(`/filtered-product/${text}/food-filter`)
    }

    return (
      <AppBar position="sticky">
        {
        auth.user.id ?(
            <StyledToolbar>
             <Box component="img" sx={{height:100, cursor:'pointer'}} alt="ingredients in foco" src={Logo} onClick={ClickImage}/>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '40%', borderRadius: '37px' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder=" Pesquise um produto"
                    inputProps={{ 'aria-label': 'pesquise um produto' }}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
                <SearchIcon sx={{color:'#747374'}} />
                </IconButton>
            </Paper>
            <Icons>
                <IconButton onClick={logout}>
                    <PersonIcon sx={{ fontSize: 40,  color: '#E52928', p:'2px'}}/> {auth.user.name}/Logout
                </IconButton>
            </Icons>
        </StyledToolbar>
        ):(
            <StyledToolbar>
            <Box component="img" sx={{height:100, cursor:'pointer'}} alt="ingredients in foco" src={Logo} onClick={ClickImage}/>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '40%', borderRadius: '37px' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder=" Pesquise um produto"
                    inputProps={{ 'aria-label': 'pesquise um produto' }}
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleClick}>
                <SearchIcon sx={{color:'#747374'}} />
                </IconButton>
            </Paper>
            <Icons>
                <IconButton onClick={Click}>
                    <PersonIcon sx={{ fontSize: 40,  color: '#E52928', p:'2px'}}/> Entrar/Cadastrar
                </IconButton>
            </Icons>
        </StyledToolbar>
        )
        }
      </AppBar> 
    )
}