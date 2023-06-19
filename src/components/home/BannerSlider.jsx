import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../public/static/bannerslider/slider1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../../public/static/banners/BannerOne.png'
import { Box } from '@mui/material'
import cart from '../../../public/static/bannerslider/burger-cart.png'

const BannerSlider = () => {
    return (

        <Box
            style={{ paddingTop: '10px' }}
        >    <Box className='cart__burger' sx={{ display: { xs: 'none', md: 'inline' }, flexGrow: 1 }}>
                <img src={cart.src} alt="" />
            </Box>

            <Carousel id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <Carousel.Item className='caroselitem'>
                    <img
                        style={{ height: '400px', borderRadius: '10px' }}
                        className="d-block w-100 img-fluid"
                        src={slider1.src}
                        alt="First slide"

                    />

                </Carousel.Item>
                <Carousel.Item className='caroselitem'>
                    <img
                        style={{ height: '400px', borderRadius: '10px' }}
                        className="d-block w-100 img-fluid"
                        src={slider1.src}
                        alt="Second slide"

                    />


                </Carousel.Item>
                <Carousel.Item className='caroselitem'>
                    <img
                        style={{ height: '400px', borderRadius: '10px' }}
                        className="d-block w-100 img-fluid"
                        src={slider1.src}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>

        </Box>
    );
};

export default BannerSlider;