import { Toolbar, Box, Drawer, CssBaseline, Icon, List, Typography, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';


export default function MenuLateral({to, icon, label}) {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({path: resolvedPath.pathname, end:false});

    const handleClick = () =>{
        navigate(to);
    }

    return(
    <ListItemButton selected={!!match} onClick={handleClick}>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    );
}