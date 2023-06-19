import React, { useRef } from 'react';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import { Typography, Button, styled, Stack, IconButton, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import feature8 from '../../../public/static/featurecatagori/Rectangle 8221.png'
import feature9 from '../../../public/static/featurecatagori/Rectangle 8222.png'
import feature10 from '../../../public/static/featurecatagori/Rectangle 8223.png'
import FoodCard from '../food-card/FoodCard'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BestRivewfood = () => {
    const bestfoodslideRef = useRef(null);
    console.log(bestfoodslideRef.current);

    var settings3 = {
        // dots: true,
        // infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [

            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 1075,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // initialSlide: 2
                    infinite: true,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    };

    return (
        <Box sx={{ paddingTop: '40px' }}>
            <Grid className='res__turant' container item lg={12} md={12} xs={12} sm={12} sx={{ alignItems: 'center', paddingBottom: '30px' }}>
                <Grid item md={6} lg={6} xs={6} sm={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Typography sx={{ fontSize: '26px', fontWeight: '800' }} className='review_title' >Best Reviewed Foods</Typography>
                </Grid>
                <Grid item md={6} lg={6} xs={6} sm={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                    {/* sx={{ border: '1px solid #FFEBDD', color: 'black', position: 'relative', left: '47.5rem' }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '40px' }}*/}
                    <Button sx={{ border: '1px solid #FFEBDD', color: 'black' }}>View all</Button>
                </Grid>
            </Grid>
            <Grid container item lg={12} md={12} xs={12}>
                <Box
                    className='slider__bestfood'
                >
                    <IconButton
                        className='icon__btn'
                        onClick={() => bestfoodslideRef.current.slickPrev()}
                    >
                        <ArrowBackIcon sx={{ color: 'white', borderRadius: 50 }} />
                    </IconButton>
                </Box>
                <Box className='slider__bestfood2'>
                    <IconButton
                        className='icon__btn'
                        onClick={() => bestfoodslideRef.current.slickNext()}
                    >
                        <ArrowForwardIcon sx={{ fontSize: 23, borderRadius: 50 }} />
                    </IconButton>
                </Box>
                <Slider ref={bestfoodslideRef} {...settings3}>
                    <FoodCard image={feature8.src} />
                    <FoodCard image={feature9.src} />
                    <FoodCard image={feature8.src} />
                    <FoodCard image={feature10.src} />
                    <FoodCard image={feature8.src} />
                    <FoodCard image={feature8.src} />
                </Slider>
            </Grid>
        </Box>
    );
};

export default BestRivewfood;