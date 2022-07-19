import React from 'react';
import Food from '../../assets/Food.png';
import {Container, ImageList, Card, CardContent, CardMedia, Typography } from '@mui/material';

export function CardFood({food}){

    return (
        <Container maxWidth="xl">
            <ImageList cols={4}>
                {food.map((item) => (
                <Card key={item.id} sx={{ maxWidth: 300, borderRadius: '37px' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Food}
                        alt="food"
                    />
                 <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign:'center'}}>
                        {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: 20, color: '#6E9440', fontWeight:'bolder'}}>
                        Fabricante:
                    </Typography>
                    <Typography sx={{ fontSize: 20}}>
                        {item.manufacturer}
                    </Typography>
                    <Typography sx={{ fontSize: 20, color: '#6E9440', fontWeight:'bolder'}}>
                        Ingredientes:
                    </Typography>
                    <Typography sx={{ fontSize: 20}}>
                        {item.ingredients}
                    </Typography>
                    <Typography sx={{ fontSize: 20, color: '#6E9440', fontWeight:'bolder'}}>
                        Informações Nutricionais:
                    </Typography>
                    <Typography sx={{ fontSize: 20}}>
                        {item.infoNutritional}
                    </Typography>
                 </CardContent>
                </Card>
               ))}
            </ImageList>
        </Container>
    );
}