import React from 'react';
import Food from '../../assets/Food.png';
import {Container, ImageList, Card, CardContent, CardMedia, Typography, Popover, Button } from '@mui/material';

export function CardFood({food}){

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
        <Container maxWidth="xl">
            <ImageList cols={4} >
                {food.map((item) => (
                <Card key={item.id} sx={{ maxWidth: 280, marginTop: '30px', borderRadius: '15px' }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://source.unsplash.com/random/?food"
                        alt="food"
                    />
                 <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign:'center'}}>
                        {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: 20, color: '#6E9440', fontWeight:'bolder', marginTop: '8px'}}>
                        Fabricante:
                    </Typography>
                    <Typography sx={{ fontSize: 17}}>
                        {item.manufacturer}
                    </Typography>
                    <Typography sx={{ fontSize: 20, color: '#6E9440', fontWeight:'bolder', marginTop: '8px'}}>
                        Ingredientes:
                    </Typography>
                    <Typography sx={{ fontSize: 17}}>
                        {item.ingredients}
                    </Typography>

                    <Button aria-describedby={id} variant="contained" onClick={handleClick} sx={{
                      backgroundColor: '#6E9440',
                      color: 'white',
                      marginTop: '10px',
                      '&:hover': {
                        backgroundColor: '#2e7d32',
                      },
                      alignContent: 'end'
                    }}>
                      Info. Nutricionais
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                    >
                      <Typography sx={{ p: 2 }}>{item.infoNutritional}</Typography>
                    </Popover>
                 </CardContent>
                </Card>
               ))}
            </ImageList>
        </Container>
    );
}