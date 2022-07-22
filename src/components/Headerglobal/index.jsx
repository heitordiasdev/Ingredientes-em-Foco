import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import { AuthContext } from '../../contexts/AuthContext';


export default function HeaderGlobal () {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    

    const Click = () => {
        navigate('/home-products');
    }
    const ClickImage = () => {
        navigate('/');
    }
    const handleLogin = async () =>{
       
        if(auth.user.typeUser === true){
            navigate("/home-admin/product-admin");
        }else if((auth.user.cpfCnpj).length === 11){
            navigate("/home-user");
        } else if((auth.user.cpfCnpj).length === 14){
            navigate("/provider");
        }  
    }

    return (
    <>
        {
        auth.user.id ?( 
        <List style={{display: 'flex', listStyle: 'none', backgroundColor: '#52691F', color: 'white', height: '7vh', justifyContent: 'flex-end'}}>
            <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer'}} onClick={ClickImage}>ÍNICIO</ListItem>
            <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer'}} onClick={Click}>PRODUTOS</ListItem>
            <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer'}} onClick={handleLogin}>MINHA AREA</ListItem>
        </List>
        ):( 
        <List style={{display: 'flex', listStyle: 'none', backgroundColor: '#52691F', color: 'white', height: '7vh', justifyContent: 'flex-end'}}>
            <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer'}} onClick={ClickImage}>ÍNICIO</ListItem>
            <ListItem style={{width: 'auto', marginRight: 40, cursor: 'pointer'}} onClick={Click}>PRODUTOS</ListItem>
        </List>
        )
       
        }
    </>
    )
}