import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Inicio from './../../assets/Inicio.png'

export default class MiddleSection extends Component {
    render() {
        return (
            <>
                <div id="inicio" style={{height: 500}}>
                <Box component="img" sx={{width: '100%', height: 500}} alt="tela inicial" src={Inicio}/>
        </div>
        <div id="sobre" style={{height: 500}}>
        <h1>This is About section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
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
