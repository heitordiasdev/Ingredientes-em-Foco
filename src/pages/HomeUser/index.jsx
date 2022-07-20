import React, { useState, useEffect } from 'react';
import { Box, Typography, ImageList, Card, CardActionArea, Popover, CardContent, CardMedia, Button, Stack } from '@mui/material';

import { foodAll } from '../../services/foodService';
import HeaderGlobal from '../../components/HeaderGlobal';

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
    
    <>
    <HeaderGlobal></HeaderGlobal>
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
          <ImageList cols={4} sx={{
            maxWidth: '1200px',
            p: 1,
          }}>
            {food.map((item) => (

              <Card sx={{
                maxWidth: 280,
                marginTop: '30px',
                borderRadius: '15px'
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image="https://source.unsplash.com/random/?food"
                    alt="produto"
                  />
                  <CardContent>
                    <Typography sx={{ textAlign: 'center', fontSize: '20pt' }}>
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
                </CardActionArea>
              </Card>
            ))}
          </ImageList>

        </Box>

      </Box>
      <Box
        sx={{
          backgroundColor: '#F5F5F5',
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
              backgroundColor: '#388e3c',
              '&:hover': {
                backgroundColor: '#2e7d32',
              },
            }}>Cadastrar</Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
};