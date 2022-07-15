import React, { useState, useEffect } from 'react';
import { Box, Typography, ImageList, Card, CardActionArea, CardContent, CardMedia, Button, Stack } from '@mui/material';
import { foodAll } from '../../services/foodService';
import { borderBottom } from '@mui/system';


export default function HomeUser() {

  const [food, setFood] = useState([]);

  useEffect(() => {
    async function loadFood() {
      const response = await foodAll();
      setFood(response);
      console.log(response);
    }
    loadFood();
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#E4E4E4',
          display: 'flex',
          height: '100%',
          overflow: 'auto',
        }}>
        <Box
          sx={{
            width: '30%',
          }}>
          <Typography sx={{
            color: '#52691F',
            fontSize: '30pt',
            textAlign: 'center',
            fontWeight: 'bolder',
            marginTop: '30px'
          }}>
            PRODUTOS
          </Typography>;
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            marginBottom: '30px'
          }}>

          <ImageList cols={4}>
            {food.map((item) => (

              <Card sx={{
                maxWidth: 345,
                // margin: '20px'
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn-icons-png.flaticon.com/512/706/706195.png"
                    alt="produto"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <b>Fabricante:</b> {item.manufacturer}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <b>Ingredientes:</b> {item.ingredients}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </ImageList>

        </Box>


      </Box>
      <Box
        sx={{
          backgroundColor: '##F5F5F5',
          display: 'flex',
          height: '50vh',
          overflow: 'auto'
        }}>
        <Box
          sx={{
            margin: 'auto'
          }}>
          <Typography sx={{
            color: '#52691F',
            fontSize: '25pt',
            textAlign: 'center',
            fontWeight: 'bolder',
          }}>
            Deseja cadastrar algum produto?
          </Typography>

          <Typography sx={{
            color: '#453F38',
            fontSize: '12pt',
            textAlign: 'center',
            fontWeight: 'bolder',
            marginTop: '30px',
            // borderBottom: '1px solid red'
          }}>
            Para cadastrar algum produto é necessário fazer login
          </Typography>

          <Stack>
            <Button sx={{
              width: '110px',
              margin: 'auto',
              marginTop: '40px',
              backgroundColor: '#4BB543',
              '&:hover': {
                backgroundColor: '#388e3c',
              },
            }}>Cadastrar</Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
};