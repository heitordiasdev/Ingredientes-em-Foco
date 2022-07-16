import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Inicio from './../../assets/Inicio.png';
import FundoFlorido from './../../assets/FundoFlorido.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default class MiddleSection extends Component {
    render() {
        return (
            <>
                <div id="inicio" style={{height: 500}}>
                    <Box sx={{width: 'auto', height: 500, backgroundSize: '100% 100%', paddingTop: 5, backgroundImage:`url(${Inicio})`}} alt="tela inicial">
                        <Card sx={{ display: 'flex', border: 2, borderRadius: 0, background: 'transparent', width: 600, height: 200, backgroundPosition: 'center', borderColor: 'white', justifyContent: 'center', margin: 'auto'}}>
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ fontSize: 40, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Encontre produtos para seu estilo de alimentação</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
                <div id="sobre" style={{height: 800}}>
                    <Box sx={{width: '100%', height: 1100, backgroundSize: '100% 100%', backgroundImage:`url(${FundoFlorido})`}} alt="tela inicial"/>
                </div>
                <div id="alergia" style={{height: 500}}>
                    <h1>This is Contact section</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
                </div>
                <div id="principais" style={{height: 500}}>
                    <h1>This is Service section</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
                </div>
            </>
        )
    }
}
