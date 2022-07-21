import React from 'react';
import Box from '@mui/material/Box';
import Inicio from './../../assets/Inicio.png';
import FundoFlorido from './../../assets/FundoFlorido.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Carousel from '../Carousel/Carousel';
import SupermercadoSQ from '../../assets/SupermercadoSQ.png'; 
import FundoAlergia from '../../assets/FundoAlergia.png';
import Alergia from '../../assets/Alergia.png';
import FundoAlergenos from '../../assets/FundoAlergenos.png';
import Alergenos from '../../assets/Alergenos.png';


export default function MiddleSection() {
        return (
            <>
                <div id="inicio" style={{height: '80vh'}}>
                    <Box sx={{ width: 'auto', flexDirection: 'column', height: '80vh', backgroundSize: '100% 100%', backgroundImage:`url(${Inicio})`}} alt="Tela Inicial">
                        <div style={{display: 'flex', height: '60vh'}}>
                            <Card sx={{ display: 'flex', alignItens:'center', border: 2, borderRadius: 0, background: 'transparent', width: 600, height: 200, borderColor: 'white', margin: 'auto'}}>
                                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: 40, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Encontre produtos para seu estilo de alimentação</Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <Card sx={{backgroundColor: 'rgba(255,255,255,0.5)', marginTop: '-35px'}}>
                            <CardContent>
                                <Carousel/>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
                <div id="sobre" style={{height:'87vh'}}>
                    <Box sx={{ display: 'flex', alignItens:'center', margin: 'auto', width: 'auto', height: "87vh", backgroundSize: '100% 100%', backgroundImage:`url(${FundoFlorido})`}} alt="Quem Somos">
                        <div style={{display: 'flex', alignItems: 'center', marginLeft: '10%'}}>
                            <Card sx={{ maxWidth: 700, position: 'absolute', margin: 0, display: 'flex', alignItens:'center'}}>
                                <CardMedia
                                    component="img"
                                    image= {SupermercadoSQ}
                                    alt="Supermercado SQ"
                                />
                            </Card>
                            <Card sx={{position: 'absolute', width: 700, height: 450, marginTop: 20, borderRadius: 5, marginLeft: '35%'}}>
                                <Typography sx={{ fontSize: 50, color: '#52691F', textAlign: 'center', fontWeight: 'bold', marginTop: 2 }}>QUEM SOMOS</Typography>
                                <Typography sx={{ fontSize: 20, color: '#707070', textAlign: 'justify', fontWeight: 'regular', marginTop: 1, marginLeft: 4, marginRight: 4 }}><Typography sx={{fontSize: 20, textAlign: 'justify', color: '#E52928', fontWeight: 'bold',  display:"inline"}}>INGREDIENTES EM FOCO</Typography> é uma iniciativa conduzida pelo supermercado SQ voltada para pessoas que convivem com o tema da alergia alimentar em suas famílias e que visa ampliar a conscientização sobre o assunto. A iniciativa é resultado da colaboração e interação de pessoas que buscam caminhos para garantir que os rótulos dos alimentos informem sobre sua composição para que os consumidores possam fazer escolhas conscientes. Dessa forma esperamos contribuir para uma melhor qualidade de vida de pessoas com restrições alimentares, facilitando a busca de alimentos que possuem ou não em sua composição determinados ingredientes. </Typography>
                            </Card>
                        </div>
                    </Box>
                </div>
                <div id="alergia" style={{height: '120vh'}}>
                    <Box sx={{ height: "120vh", backgroundSize: '100% 100%', marginTop: -1, backgroundImage:`url(${FundoAlergia})`}} alt="Alergia">
                        <div style={{display: 'flex', alignItens:'center', flexDirection: 'row', justifyContent:'space-around', paddingTop: 120, marginLeft: '8%', marginRight: '8%'}}>
                            <Typography sx={{ fontSize: 50, color: '#FFFFFF', textAlign: 'left', fontWeight: 'bold', marginTop: 1, maxWidth: 100, lineHeight: 1}}>ALERGIA ALIMENTAR</Typography>
                            <Typography sx={{ fontSize: 20, color: '#FFFFFF', textAlign: 'justify', fontWeight: 'regular', width: 600 }}>A alergia alimentar acontece quando o corpo identifica um alimento como perigoso e reage com um ou mais sintomas. A reação alérgica ocorre geralmente quando comemos o alimento que faz mal. Em alguns casos a reação também pode ocorrer pela inalação ou contato com o alimento (o que é menos comum).</Typography>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                            <Card sx={{ maxWidth: 1000, marginTop: 4}}>
                                <CardMedia
                                    component="img"
                                    image= {Alergia}
                                    alt="Alergia Alimentar"
                                />
                            </Card>
                        </div>
                    </Box>
                </div>
                <div id="principais" style={{height: "140vh"}}>
                    <Box sx={{ height: "140vh", backgroundSize: '100% 100%', marginTop: -1, backgroundImage:`url(${FundoAlergenos})`}} alt="Alergenos">
                       <div style={{display: 'flex', alignItens:'center', flexDirection: 'row', justifyContent:'space-around', paddingTop: 120, marginLeft: '8%', marginRight: '8%'}}>
                            <Typography sx={{ fontSize: 50, color: '#52691F', textAlign: 'left', fontWeight: 'bold', marginTop: 1, maxWidth: 100, lineHeight: 1}}>PRINCIPAIS ALÉRGENOS</Typography>
                            <Typography sx={{ fontSize: 20, color: '#707070', textAlign: 'justify', fontWeight: 'regular', width: 600 }}>A princípio, qualquer alimento pode causar uma reação alérgica (inclusive aqueles que já ingerimos antes sem problemas) porém, existem oito em particular que são os alérgenos mais comuns. Eles são responsáveis por 90% dos casos de alergia alimentar. São eles: ovo, leite, amendoim, mariscos, glúten, soja, peixe e nozes.</Typography>
                       </div>
                       <div style={{display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                            <Card sx={{ maxWidth: 1000, marginTop: 4}}>
                                <CardMedia
                                    component="img"
                                    image= {Alergenos}
                                    alt="Principais Alergenos"
                                />
                            </Card>
                        </div>
                    </Box>
                </div>
            </>

        )
}
