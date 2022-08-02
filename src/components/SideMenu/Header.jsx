import React from 'react'
import {Link} from 'react-scroll'
import { List, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Header () {
    const navigate = useNavigate();

    const Click = () => {
        navigate('/home-products');
    }

        return (
            <List style={{display: 'flex', listStyle: 'none', backgroundColor: '#52691F', color: 'white', height: '7vh', justifyContent: 'flex-end'}}>
                <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer'}}><Link activeClass="active" to="inicio" spy={true} smooth={true}>INÍCIO</Link></ListItem>
                <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer'}}><Link  to="sobre" spy={true} smooth={true}>QUEM SOMOS</Link></ListItem>
                <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer'}}><Link  to="alergia" spy={true} smooth={true}>ALERGIA ALIMENTAR</Link></ListItem>
                <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer'}}><Link  to="principais" spy={true} smooth={true}>PRINCIPAIS ALÉRGENOS</Link></ListItem>
                <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer' }} onClick={Click}>PRODUTOS</ListItem>
            </List>
        )
}
