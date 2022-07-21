import { Button, styled, Typography } from "@mui/material";

export const StyledTypography = styled(Typography)({
    fontSize: 20, 
    color: '#6E9440', 
    fontWeight:'bolder', 
    marginTop: '8px'
})

export const StyledButton = styled(Button)({
    backgroundColor: '#6E9440',
    color: 'white',
    marginTop: '10px',
    '&:hover': {
        backgroundColor: '#2e7d32',
    },
    alignContent: 'end'
})