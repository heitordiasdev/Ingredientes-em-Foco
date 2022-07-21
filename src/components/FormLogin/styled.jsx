import { styled, Box, Typography, Card } from "@mui/material";
import Login from '../../assets/Register.png';

export const StyledBox = styled(Box)(
    {
      backgroundImage: `url(${Login})`,
      backgroundSize: 'cover',
      height: '80vh',
    }
);

export const StyledTypography = styled(Typography)({
    float: 'left', 
    marginTop: '15%', 
    marginLeft: '16%', 
    color: 'white', 
    fontWeight: 'bold'
})

export const StyledCard = styled(Card)({
    border: 1,
    textAlign: 'center',
    float: 'right',
    marginRight: '15%',
    marginTop: '10%',
    width: '25%',
    background: 'transparent',
    borderRadius: '10px',
    borderColor: 'white'
})