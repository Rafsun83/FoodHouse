import React, { useRef } from 'react';
import StarIcon from '@mui/icons-material/Star';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import img from '../../../public/static/banners/hero-banner-sm.png'
import feature from '../../../public/static/featurecatagori/image 10.png'
import feature1 from '../../../public/static/featurecatagori/image 11.png'
import feature2 from '../../../public/static/featurecatagori/image 12.png'
import feature3 from '../../../public/static/featurecatagori/image 13.png'
import feature4 from '../../../public/static/featurecatagori/image 14.png'
import feature5 from '../../../public/static/featurecatagori/image 15.png'
import feature6 from '../../../public/static/featurecatagori/image 16.png'
import feature7 from '../../../public/static/featurecatagori/image 17.png'
import feature8 from '../../../public/static/featurecatagori/Rectangle 8221.png'
import feature9 from '../../../public/static/featurecatagori/Rectangle 8222.png'
import feature10 from '../../../public/static/featurecatagori/Rectangle 8223.png'
import { Typography, Button, styled, Stack, IconButton, Grid } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardImg from '../../../public/static/featurecatagori/Rectangle 8223.png'
import CardImg2 from '../../../public/static/featurecatagori/Rectangle 8223.png'
import CardImg3 from '../../../public/static/featurecatagori/Rectangle 8221.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';





const FeatureCatagorie = () => {


    var settings = {
        // dots: true,
        // infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1444,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1166,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 672,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // initialSlide: 2
                    infinite: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    };


    var settings2 = {
        // dots: true,
        // infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [

            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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

    const sliderRef = useRef(null);
    console.log(sliderRef.current);

    const slider2Ref = useRef(null);
    console.log(slider2Ref.current);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box className='Catagoriesection'>
            <Box className='Featureshead'>
                <Typography variant='h2'>Features Catagories</Typography>
                <Box
                >
                    <IconButton
                        onClick={() => sliderRef.current.slickPrev()}
                        sx={{ borderRadius: 50 }}>
                        <KeyboardArrowLeftIcon sx={{ fontSize: 23, bgcolor: '#EF7822', color: 'white', borderRadius: 50 }} />
                    </IconButton>
                    <IconButton
                        onClick={() => sliderRef.current.slickNext()}
                        sx={{ borderRadius: 50 }}>
                        <ChevronRightIcon sx={{ fontSize: 23, bgcolor: '#E4E4E4', borderRadius: 50 }} />
                    </IconButton>
                </Box>
            </Box>



            <Grid container item lg={12} md={12} spacing={{ xs: 1, md: 1, lg: 1 }}>
                <Slider className='slick__slider' {...settings} ref={sliderRef}   >

                    <Grid item>
                        <Paper elevation={0} className='catagori__slider' >
                            <img className='featureimg' src={feature.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} className='catagori__slider' >
                            <img className='featureimg' src={feature1.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} className='catagori__slider' >
                            <img className='featureimg' src={feature2.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} className='catagori__slider'>
                            <img className='featureimg' src={feature3.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} className='catagori__slider' >
                            <img className='featureimg' src={feature4.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} className='catagori__slider'>
                            <img className='featureimg' src={feature5.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} className='catagori__slider'>
                            <img className='featureimg' src={feature6.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper elevation={0} className='catagori__slider'>
                            <img className='featureimg' src={feature6.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} className='catagori__slider' >
                            <img className='featureimg' src={feature6.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} className='catagori__slider'>
                            <img className='featureimg' src={feature6.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} className='catagori__slider'>
                            <img className='featureimg' src={feature6.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} className='catagori__slider'>
                            <img className='featureimg' src={feature6.src} alt="" />
                            <Stack
                                sx={{ textAlign: 'center' }}
                            >
                                <Typography variant='h4'>Chinese Food</Typography>
                                <Typography variant='h6'>(25 Items)</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                </Slider>
            </Grid>





            <Grid item container spacing={{ xs: 1, md: 1, lg: 1 }} >
                {/* className='catagori__secondslide' sx={{ display: 'flex' }}  className='catagori__box'  */}
                <Grid item xs={12} md={4} sm={12} lg={4} >
                    <Box

                        sx={{
                            // gap: '20px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                // marginRight: '1rem',
                                Width: 400,
                                Height: 400,
                            },
                        }}
                    >
                        <Paper className='catagori___img' elevation={0} sx={{ backgroundColor: 'rgb(230,233,239)' }}>
                            <img src={feature7.src} alt="" />
                        </Paper>


                    </Box>
                </Grid>
                <Grid item xs={12} md={8} sm={12} lg={8}>

                    <Grid item container md={12}>
                        <Box
                            className='slider2__bestfood'
                        >
                            <IconButton
                                className='icon1__btn'
                                onClick={() => slider2Ref.current.slickPrev()}
                            >
                                <KeyboardArrowLeftIcon sx={{ color: 'black', borderRadius: 50 }} />
                            </IconButton>
                        </Box>
                        <Box
                            className='slider2__bestfood2'
                        >
                            <IconButton
                                className='icon1__btn'
                                onClick={() => slider2Ref.current.slickNext()}
                            >
                                <ChevronRightIcon sx={{ color: 'black', borderRadius: 50 }} />
                            </IconButton>
                        </Box>
                        <Slider ref={slider2Ref} {...settings2}>
                            <Grid item md={4} xs={6}>
                                <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                                    <Typography className='offer__tag' >30% OFF</Typography>

                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        maxHeight="250"
                                        image={feature8.src}
                                    />

                                    <CardContent sx={{ textAlign: 'center', padding: '10px 8px' }}>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Salmon avogada sushi with chees
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Hungry pupptes
                                        </Typography>
                                        <Typography sx={{ display: 'flex', fontWeight: 'bold', alignItems: 'center', fontSize: '14px', justifyContent: 'center' }}>
                                            4.5 <StarIcon sx={{ fontSize: '14px', color: 'orange' }} />
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ padding: '0px 0px 0px 0px', justifyContent: 'space-between' }}>
                                        <Typography sx={{ fontSize: '17px', fontWeight: '400' }}> <span style={{ color: 'red', textDecorationLine: 'line-through', fontSize: '12px' }} >$ 14.00</span> $ 34.00</Typography>
                                        <Button size="small" className='card__btn'><ArrowForwardIcon /></Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                                    <Typography className='offer__tag' >30% OFF</Typography>

                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        maxHeight="250"
                                        image={feature8.src}
                                    />

                                    <CardContent sx={{ textAlign: 'center', padding: '10px 8px' }}>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Salmon avogada sushi with chees
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Hungry pupptes
                                        </Typography>
                                        <Typography sx={{ display: 'flex', fontWeight: 'bold', alignItems: 'center', fontSize: '14px', justifyContent: 'center' }}>
                                            4.5 <StarIcon sx={{ fontSize: '14px', color: 'orange' }} />
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ padding: '0px 0px 0px 0px', justifyContent: 'space-between' }}>
                                        <Typography sx={{ fontSize: '17px', fontWeight: '400' }}> <span style={{ color: 'red', textDecorationLine: 'line-through', fontSize: '12px' }} >$ 14.00</span> $ 34.00</Typography>
                                        <Button size="small" className='card__btn'><ArrowForwardIcon /></Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                                    <Typography className='offer__tag' >30% OFF</Typography>

                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        maxHeight="250"
                                        image={feature8.src}
                                    />

                                    <CardContent sx={{ textAlign: 'center', padding: '10px 8px' }}>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Salmon avogada sushi with chees
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Hungry pupptes
                                        </Typography>
                                        <Typography sx={{ display: 'flex', fontWeight: 'bold', alignItems: 'center', fontSize: '14px', justifyContent: 'center' }}>
                                            4.5 <StarIcon sx={{ fontSize: '14px', color: 'orange' }} />
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ padding: '0px 0px 0px 0px', justifyContent: 'space-between' }}>
                                        <Typography sx={{ fontSize: '17px', fontWeight: '400' }}> <span style={{ color: 'red', textDecorationLine: 'line-through', fontSize: '12px' }} >$ 14.00</span> $ 34.00</Typography>
                                        <Button size="small" className='card__btn'><ArrowForwardIcon /></Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                                    <Typography className='offer__tag' >30% OFF</Typography>

                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        maxHeight="250"
                                        image={feature8.src}
                                    />

                                    <CardContent sx={{ textAlign: 'center', padding: '10px 8px' }}>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Salmon avogada sushi with chees
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Hungry pupptes
                                        </Typography>
                                        <Typography sx={{ display: 'flex', fontWeight: 'bold', alignItems: 'center', fontSize: '14px', justifyContent: 'center' }}>
                                            4.5 <StarIcon sx={{ fontSize: '14px', color: 'orange' }} />
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ padding: '0px 0px 0px 0px', justifyContent: 'space-between' }}>
                                        <Typography sx={{ fontSize: '17px', fontWeight: '400' }}> <span style={{ color: 'red', textDecorationLine: 'line-through', fontSize: '12px' }} >$ 14.00</span> $ 34.00</Typography>
                                        <Button size="small" className='card__btn'><ArrowForwardIcon /></Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Slider>

                    </Grid>
                </Grid>
            </Grid>

        </Box >
    );
};

export default FeatureCatagorie;