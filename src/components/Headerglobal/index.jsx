import React from 'react'
import { useNavigate } from 'react-router-dom';
import { List, ListItem } from '@mui/material';


export default function HeaderGlobal () {
    const navigate = useNavigate();

    const Click = () => {
        navigate('/home-user');
    }
    const ClickImage = () => {
        navigate('/');
    }
    return (
        <List style={{display: 'flex', listStyle: 'none', backgroundColor: '#52691F', color: 'white', height: 50, justifyContent: 'flex-end'}}>
            <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer'}} onClick={ClickImage}>ÍNICIO</ListItem>
            <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer'}} onClick={Click}>PRODUTOS</ListItem>
        </List>
    )
}