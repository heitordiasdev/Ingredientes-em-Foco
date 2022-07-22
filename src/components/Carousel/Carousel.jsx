import React, {useState} from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Paper, Button } from '@mui/material';
import FilterOvo from './../../assets/FilterOvo.png';
import FilterLactose from './../../assets/FilterLactose.png';
import FilterCamarao from './../../assets/FilterCamarao.jpg'
import FilterGluten from './../../assets/FilterGluten.png';
import FilterAmendoim from './../../assets/FilterAmendoim.png';
import Box from '@mui/material/Box';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


function Carousel(props) {
    const [active, setaAtive] = useState(0);
   
    var items = [
        {
            img: <img src={FilterOvo} alt="ovo" />,
            name: 'ovo'
        },
        {
            img: <img src={FilterLactose} alt="lactose"/>,
            name: 'lactose'
        },
        {
            img: <img src={FilterCamarao} alt="camarao"/>,
            name: 'camarão'
        },
        {
            img: <img src={FilterGluten} alt="gluten"/>,
            name: 'gluten'
        },
        {
            img: <img src={FilterAmendoim} alt="amendoim"/>,
            name:'amendoim'
        }
    ]

    return (
        <div class="carousel">
            <Box sx={{padding:"0 60px",maxWidth:800,margin:"0 auto"}}>
          
                <ItemsCarousel
                    infiniteLoop={true}
                    gutter={5}
                    activePosition={'center'}
                    chevronWidth={30}
                    disableSwipe={false}
                    alwaysShowChevrons={true}
                    numberOfCards={3}
                    slidesToScroll={2}
                    outsideChevron={true}
                    showSlither={false}
                    firstAndLastGutter={false}
                    activeItemIndex={active}
                    requestToChangeActive={(value) => setaAtive(value)}
                    rightChevron={<ArrowCircleRightIcon sx={{ color: "#E4E4E4",
                    "&:hover, &.Mui-focusVisible": {
                        transition: '0.4s',
                        color: '#52691F',
                    } }} />}
                    leftChevron={<ArrowCircleLeftIcon sx={{ color: "#E4E4E4",
                    "&:hover, &.Mui-focusVisible": {
                        transition: '0.4s',
                        color: '#52691F',
                    } }} />}
                >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </ItemsCarousel>
            
         </Box>
        </div>
    )
}

function Item(props) {
    return (
       
        <Button className="CheckButton" href={`/home-products-no-ingredient/${props.item.name}`}>
            < Paper sx={{display: 'flex', backgroundColor: '#F5F5F5', justifyContent: 'center', width: '250px', height: '70px'}}>
                {props.item.img}
            </Paper>
        </Button>
       
    )
}

export default Carousel;