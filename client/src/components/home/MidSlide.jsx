import React from 'react';
import { Box, styled } from '@mui/material';

import Slide from './Slide';

const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)`
    width: 83%;
`

const RightComponent = styled(Box)`
    margin-top: 10;
    background: #FFFFFF;
    width: 17%;
    margin-left: 10;
    padding: 5;
    text-align: center;
    margin-top: 10px;
`

const ImageFinal = styled ('img') ({
    marginTop: 15
})

const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <Component>
            <LeftComponent>
                <Slide 
                    products={products} 
                    timer={timer} 
                    title={title}
                />
            </LeftComponent>
            <RightComponent>
                <ImageFinal src={adURL} style={{width: 217}}/>
            </RightComponent>
        </Component>
    )
}

export default MidSlide;