import React, {useState, useEffect} from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/material';

const StyleIconButton = styled(IconButton)({
    zIndex: 1,
    position: 'fixed',
    bottom: '2vh',
    backgroundColor: '#E4E4E4',
    color: '#52691F',
    "&:hover, &.Mui-focusVisible": {
        transition: '0.4s',
        color: 'white',
        backgroundColor: '#52691F',
    },
    right: '5%',    
});

const Scroll = ({showBelow}) => {

    const[show, setShow] = useState(showBelow ? false : true)
    
    const handScroll = () => {
        if(window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }
    
    const handleClick = () => {
        window[`scrollTo`]({top: 0, behavior: `smooth`})
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handScroll)
            return () => window.removeEventListener(`scroll`, handScroll)
        }
    })
    
    return (
        <div >
            {show &&
                <StyleIconButton onClick={handleClick}>
                    <ExpandLessIcon />
                </StyleIconButton>
            }

        </div>
    )
}

export default Scroll