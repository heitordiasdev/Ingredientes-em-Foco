import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import FilterOvo from './../../assets/FilterOvo.png';
import FilterLactose from './../../assets/FilterLactose.png';
import FilterCamarao from './../../assets/FilterCamarao.png'
import FilterGluten from './../../assets/FilterGluten.png';

function Example(props) {
    var items = [
        {
            img: <img src={FilterOvo} alt="ovo"/>
        },
        {
            img: <img src={FilterLactose} alt="lactose"/>
        },
        {
            img: <img src={FilterCamarao} alt="camarao"/>
        },
        {
            img: <img src={FilterGluten} alt="gluten"/>
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper sx={{display: 'flex', backgroundColor: 'gray', opacity: 0.5, justifyContent: 'center'}}>
            <Button className="CheckButton">
                {props.item.img}
            </Button>
        </Paper>
    )
}

export default Example