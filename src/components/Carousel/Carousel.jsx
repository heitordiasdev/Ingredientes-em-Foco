import React, {useState} from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Paper, Button } from '@mui/material';
import FilterOvo from './../../assets/FilterOvo.png';
import FilterLactose from './../../assets/FilterLactose.png';
import FilterCamarao from './../../assets/FilterCamarao.png'
import FilterGluten from './../../assets/FilterGluten.png';
import FilterAmendoim from './../../assets/FilterAmendoim.png';
import Box from '@mui/material/Box';


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
        <div class="carousel" sx={{width: "80%", display : "flex", justifyContent : 'center', backgroundColor: "red"}}>
            <Box style={{marginLeft:30, width: "80%"}}>
          
                <ItemsCarousel
                    infiniteLoop={true}
                    gutter={12}
                    timeout={1}
                    chevronWidth={40}
                    numberOfCards={3}
                    outsideChevron={true}
                    activeItemIndex={active}
                    requestToChangeActive={(value) => setaAtive(value)}
                    rightChevron={">"}
                    leftChevron={"<"}
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