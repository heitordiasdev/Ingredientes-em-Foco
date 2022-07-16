import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Inicio from './../../assets/Inicio.png';
import FundoFlorido from './../../assets/FundoFlorido.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Carousel from '../Carousel/Carousel';
import SupermercadoSQ from '../../assets/SupermercadoSQ.png'; 
import Alergia from '../../assets/Alergia.png';
import FundoAlergenos from'../../assets/FundoAlergenos.png';
import Alergenos from '../../assets/Alergenos.png';


export default class MiddleSection extends Component {
    render() {
        return (
            <>
                <div id="inicio" style={{height: 500}}>
                    <Box sx={{width: 'auto', height: 500, backgroundSize: '100% 100%', paddingTop: 5, backgroundImage:`url(${Inicio})`}} alt="Tela Inicial">
                        <Card sx={{ display: 'flex', border: 2, borderRadius: 0, background: 'transparent', width: 600, height: 200, backgroundPosition: 'center', borderColor: 'white', justifyContent: 'center', margin: 'auto'}}>
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ fontSize: 40, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Encontre produtos para seu estilo de alimentação</Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{backgroundColor: 'rgba(255,255,255,0.5)', alignItems: 'center', paddingLeft:'200px', marginTop:'60px'}}>
                            <CardContent>
                                <Carousel/>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
                <div id="sobre" style={{height: 700}}>
                    <Box sx={{width: 'auto', height: 1200, backgroundSize: '100% 100%', paddingLeft: 3, paddingTop: 3, backgroundImage:`url(${FundoFlorido})`}} alt="Quem Somos">
                        <Card sx={{ maxWidth: 800, position: 'absolute'}}>
                            <CardMedia
                                component="img"
                                image= {SupermercadoSQ}
                                alt="Supermercado SQ"
                            />
                        </Card>
                        <Card sx={{position: 'absolute', width: 700, height: 450, marginTop: 20, marginLeft: 70, borderRadius: 5}}>
                            <Typography sx={{ fontSize: 50, color: '#52691F', textAlign: 'center', fontWeight: 'bold', marginTop: 2 }}>QUEM SOMOS</Typography>
                            <Typography sx={{ fontSize: 20, color: '#707070', textAlign: 'justify', fontWeight: 'regular', marginTop: 1, marginLeft: 4, marginRight: 4 }}><Typography sx={{fontSize: 20, textAlign: 'justify', color: '#E52928', fontWeight: 'bold',  display:"inline"}}>INGREDIENTES EM FOCO</Typography> é uma iniciativa conduzida pelo supermercado SQ voltada para pessoas que convivem com o tema da alergia alimentar em suas famílias e que visa ampliar a conscientização sobre o assunto. A iniciativa é resultado da colaboração e interação de pessoas que buscam caminhos para garantir que os rótulos dos alimentos informem sobre sua composição para que os consumidores possam fazer escolhas conscientes. Dessa forma esperamos contribuir para uma melhor qualidade de vida de pessoas com restrições alimentares, facilitando a busca de alimentos que possuem ou não em sua composição determinados ingredientes. </Typography>
                        </Card>
                    </Box>
                </div>
                <div id="alergia" style={{height: 750,}}>
                    <Box sx={{paddingTop: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Typography sx={{ fontSize: 50, color: '#FFFFFF', textAlign: 'left', fontWeight: 'bold', marginLeft: 10, marginTop: 1, maxWidth: 100, lineHeight: 1}}>ALERGIA ALIMENTAR</Typography>
                        <Typography sx={{ fontSize: 20, color: '#FFFFFF', textAlign: 'justify', fontWeight: 'regular', width: 700, marginRight: 30 }}>A alergia alimentar acontece quando o corpo identifica um alimento como perigoso e reage com um ou mais sintomas. A reação alérgica ocorre geralmente quando comemos o alimento que faz mal. Em alguns casos a reação também pode ocorrer pela inalação ou contato com o alimento (o que é menos comum).</Typography>
                    </Box>
                    <Card sx={{ maxWidth: 1000, marginTop: 4, marginLeft: 23}}>
                        <CardMedia
                            component="img"
                            image= {Alergia}
                            alt="Alergia Alimentar"
                        />
                    </Card>
                </div>
                <div id="principais" style={{height: 850}}>
                    <Box sx={{paddingTop: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Typography sx={{ fontSize: 50, color: '#52691F', textAlign: 'left', fontWeight: 'bold', marginLeft: 10, marginTop: 1, maxWidth: 100, lineHeight: 1}}>PRINCIPAIS ALÉRGENOS</Typography>
                        <Typography sx={{ fontSize: 20, color: '#707070', textAlign: 'justify', fontWeight: 'regular', width: 700, marginRight: 30 }}>A princípio, qualquer alimento pode causar uma reação alérgica (inclusive aqueles que já ingerimos antes sem problemas) porém, existem oito em particular que são os alérgenos mais comuns. Eles são responsáveis por 90% dos casos de alergia alimentar. São eles: ovo, leite, amendoim, mariscos, glúten, soja, peixe e nozes.</Typography>
                    </Box>
                    <Box sx={{ width: 'auto', height: 1270, backgroundSize: '100% 100%', marginTop: -60,  backgroundImage:`url(${FundoAlergenos})`}}>
                        <Card sx={{ maxWidth: 1000, marginTop: 65, marginLeft: 23, position: 'absolute'}}>
                            <CardMedia
                                component="img"
                                image= {Alergenos}
                                alt="Principais Alergenos"
                            />
                        </Card>
                    </Box>
        
                </div>
            </>

        )
    }
}
