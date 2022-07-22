import { Button, styled, Typography } from "@mui/material";

export const StyledTypography1 = styled(Typography)({
    color: '#52691F',
    fontSize: '25pt',
    textAlign: 'center',
    fontWeight: 'bolder',
})

export const StyledTypography2 = styled(Typography)({
    color: '#453F38',
    fontSize: '12pt',
    textAlign: 'center',
    fontWeight: 'bolder',
    marginTop: '30px',
})

export const StyledButton = styled(Button)({
    width: '110px',
    margin: 'auto',
    marginTop: '40px',
    backgroundColor: '#4BB543',
              '&:hover': {
                backgroundColor: '#388e3c',
              },
})