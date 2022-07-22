import React from 'react';
import {Container, ImageList, Card, CardContent, CardMedia, Typography, Popover} from '@mui/material';
import { StyledTypography, StyledButton } from './styled';

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
                    <StyledTypography>
                        Fabricante:
                    </StyledTypography>
                    <Typography sx={{ fontSize: 17}}>
                        {item.manufacturer}
                    </Typography>
                    <StyledTypography >
                        Ingredientes:
                    </StyledTypography>
                    <Typography sx={{ fontSize: 17}}>
                        {item.ingredients}
                    </Typography>

                    <StyledButton aria-describedby={id} variant="contained" onClick={handleClick}>
                      Info. Nutricionais
                    </StyledButton>
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
                      <Typography sx={{ p: 2, maxWidth: '350px' }}>{item.infoNutritional}</Typography>
                    </Popover>
                 </CardContent>
                </Card>
               ))}
            </ImageList>
        </Container>
    );
}