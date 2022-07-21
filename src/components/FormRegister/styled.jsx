import Register from '../../assets/Register.png';
import { Card, styled, Box } from '@mui/material';

export const StyledBox = styled(Box)(
    {
      backgroundImage: `url(${Register})`,
      backgroundSize: 'cover',
      height: '80vh',
    }
  );

export const StyledCard = styled(Card)({
    border: 1,
    textAlign: 'center',
    float: 'right',
    marginRight: '10%',
    marginTop: '8%',
    width: '35%',
    background: 'transparent',
    borderRadius: '10px',
    borderColor: 'white'
})