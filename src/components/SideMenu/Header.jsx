import React, { Component } from 'react'
import {Link} from 'react-scroll'
import { List, ListItem } from '@mui/material';



export default class Header extends Component {
    render() {
        return (
            <List style={{display: 'flex', listStyle: 'none', backgroundColor: '#52691F', color: 'white', height: 50, justifyContent: 'flex-end'}}>
                <ListItem style={{width: 'auto', marginRight: 40}}><Link activeClass="active" to="inicio" spy={true} smooth={true}>ÍNICIO</Link></ListItem>
                <ListItem style={{width: 'auto', marginRight: 40}}><Link  to="sobre" spy={true} smooth={true}>QUEM SOMOS</Link></ListItem>
                <ListItem style={{width: 'auto', marginRight: 40}}><Link  to="alergia" spy={true} smooth={true}>ALERGIA ALIMENTAR</Link></ListItem>
                <ListItem style={{width: 'auto', marginRight: 40}}><Link  to="principais" spy={true} smooth={true}>PRINCIPAIS ALÉRGENOS</Link></ListItem>
                <ListItem style={{width: 'auto', marginRight: 40}}><Link  to="produtos" spy={true} smooth={true}>PRODUTOS</Link></ListItem>
            </List>
        )
    }
}
