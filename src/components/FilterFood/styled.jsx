import { Button, Paper, styled, Typography } from "@mui/material";

export const StyledTypography = styled(Typography)({
    fontSize: 25,
    color: '#453F38', 
    textAlign:'center', 
    fontWeight:'bolder'
})

export const StyledPaper = styled(Paper)({
    p: '2px 4px',
    margin:'10px' , 
    display: 'flex', 
    alignItems: 'center', 
    width: '100%', 
    borderRadius: '37px'
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