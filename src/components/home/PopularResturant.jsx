import React, { useRef } from 'react';
import StarIcon from '@mui/icons-material/Star';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import popular from '../../../public/static/popularResturant/Rectangle 8215.png'
import popular1 from '../../../public/static/popularResturant/Rectangle 8233.png'
import popular2 from '../../../public/static/popularResturant/Rectangle 8234.png'
import popular3 from '../../../public/static/popularResturant/Rectangle 8235.png'
import popular4 from '../../../public/static/popularResturant/Rectangle 8236.png'
import popular5 from '../../../public/static/popularResturant/Rectangle 8250.png'
import popular6 from '../../../public/static/popularResturant/Rectangle 8251.png'
import popular7 from '../../../public/static/popularResturant/Rectangle 8252.png'
import popular8 from '../../../public/static/popularResturant/Rectangle 8253.png'
import popularnearby from '../../../public/static/popularResturant/image 19.png'
import popularcard from '../../../public/static/popularResturant/Rectangle 8222.png'
import popularcard1 from '../../../public/static/popularResturant/Rectangle 8223.png'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography, Button, Stack, IconButton } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardImg from '../../../public/static/featurecatagori/Rectangle 8223.png'
import CardImg2 from '../../../public/static/featurecatagori/Rectangle 8223.png'
import CardImg3 from '../../../public/static/featurecatagori/Rectangle 8221.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PopularResturant = () => {

    var settings4 = {
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


    const slider2Ref = useRef(null);
    console.log(slider2Ref.current);
    return (
        <Box className='nearbytop'>

            <Grid item container spacing={2} sx={{ paddingBottom: '30px' }}>
                <Grid item md={6} xs={12} className='md'>
                    <Box className='popular__nearby'>
                        <Box className='popular'>
                            <Typography variant='h3' component='h3' >Popular Resturant Nearby</Typography>
                            <Button
                                sx={{ border: '1px solid #FFEBDD', color: 'black' }}
                            >View all</Button>
                        </Box>
                        <Box className='cardpopular'>
                            <img className='PopularRes_img' src={popular2.src} alt="" />
                            <Box className='populartext'>
                                <Typography variant='h5'>Mini kebab</Typography>
                                <Typography>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></Typography> <br />
                                <Typography sx={{ fontSize: '14px', color: '#9B9B9B' }}>Adress: house:00,Road:00,Streed:00, Test city</Typography>
                            </Box>
                        </Box>
                        <Box className='cardpopular'>
                            <img className='PopularRes_img' src={popular1.src} alt="" />
                            <Box className='populartext'>
                                <Typography variant='h5'>The capital Gril</Typography>
                                <Typography>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></Typography> <br />
                                <Typography sx={{ fontSize: '14px', color: '#9B9B9B' }}>Adress: house:00,Road:00,Streed:00, Test city</Typography>
                            </Box>
                        </Box>
                        <Box className='cardpopular'>
                            <img className='PopularRes_img' src={popular2.src} alt="" />
                            <Box className='populartext'>
                                <Typography variant='h5'>Tasty lunch</Typography>
                                <Typography>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></Typography> <br />
                                <Typography sx={{ fontSize: '14px', color: '#9B9B9B' }}>Adress: house:00,Road:00,Streed:00, Test city</Typography>
                            </Box>
                        </Box>
                        <Box className='cardpopular'>
                            <img className='PopularRes_img' src={popular3.src} alt="" />
                            <Box className='populartext'>
                                <Typography variant='h5'>The Great Impasta</Typography>
                                <Typography>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></Typography> <br />
                                <Typography sx={{ fontSize: '14px', color: '#9B9B9B' }}>Adress: house:00,Road:00,Streed:00, Test city</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Grid>


                <Grid item md={6} xs={12} className='md'>
                    <Box className='popular__nearby'>
                        <Box className='popular'>
                            <Typography variant='h3'>New on StackFood</Typography>
                            <Button
                                sx={{ border: '1px solid #FFEBDD', color: 'black' }}
                            >View all</Button>
                        </Box>
                        <Box className='cardpopular'>
                            <img className='PopularRes_img' src={popular4.src} alt="" />
                            <Box className='populartext'>
                                <Typography variant='h5'>The Great Impasta</Typography>
                                <Typography>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></Typography> <br />
                                <Typography sx={{ fontSize: '14px', color: '#9B9B9B' }}>Adress: house:00,Road:00,Streed:00, Test city</Typography>
                            </Box>
                        </Box>
                        <Box className='cardpopular'>
                            <img className='PopularRes_img' src={popular5.src} alt="" />
                            <Box className='populartext'>
                                <Typography variant='h5'>The Great Impasta</Typography>
                                <Typography>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></Typography> <br />
                                <Typography sx={{ fontSize: '14px', color: '#9B9B9B' }}>Adress: house:00,Road:00,Streed:00, Test city</Typography>
                            </Box>
                        </Box>
                        <Box className='cardpopular'>
                            <img className='PopularRes_img' src={popular6.src} alt="" />
                            <Box className='populartext'>
                                <Typography variant='h5'>The Great Impasta</Typography>
                                <Typography>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></Typography> <br />
                                <Typography sx={{ fontSize: '14px', color: '#9B9B9B' }}>Adress: house:00,Road:00,Streed:00, Test city</Typography>
                            </Box>
                        </Box>
                        <Box className='cardpopular'>
                            <img className='PopularRes_img' src={popular7.src} alt="" />
                            <Box className='populartext'>
                                <Typography variant='h5'>The Great Impasta</Typography>
                                <Typography>4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></Typography> <br />
                                <Typography sx={{ fontSize: '14px', color: '#9B9B9B' }}>Adress: house:00,Road:00,Streed:00, Test city</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                {/* <Box>
                        <Box
                            className='slider2__bestfood'
                        >
                            <IconButton
                                className='icon1__btn'
                                onClick={() => slider2Ref.current.slickPrev()}
                            >
                                <KeyboardArrowLeftIcon sx={{ color: 'white', borderRadius: 50 }} />
                            </IconButton>
                        </Box>
                        <Box
                            className='slider2__bestfood2'
                        >
                            <IconButton
                                className='icon1__btn'
                                onClick={() => slider2Ref.current.slickNext()}
                            >
                                <ChevronRightIcon sx={{ color: 'white', borderRadius: 50 }} />
                            </IconButton>
                        </Box>

                    </Box> */}

            </Grid>




            <Grid item container spacing={{ xs: 1, md: 1, lg: 1 }}>
                {/* className='catagori__secondslide' sx={{ display: 'flex' }}  className='catagori__box'  */}
                <Grid item xs={12} md={4} sm={12} lg={4}>
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
                            <img src={popularnearby.src} alt="" />
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
                        <Slider ref={slider2Ref} {...settings4}>
                            <Grid item md={4} xs={6}>
                                <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                                    <Typography className='offer__tag' >30% OFF</Typography>

                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        maxHeight="250"
                                        image={popularcard.src}
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
                                        image={popularcard1.src}
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
                                        image={popularcard.src}
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
                                        image={popularcard1.src}
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

export default PopularResturant;