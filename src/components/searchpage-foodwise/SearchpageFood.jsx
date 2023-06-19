import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../../public/static/featurecatagori/Rectangle 8223.png'
import { Box, Grid, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Dropdown } from 'react-bootstrap';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import buttonImg from '../../../public/static/buttonImg/image 30.png'
import buttonImg2 from '../../../public/static/buttonImg/image 29.png'
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';

const SearchpageFood = () => {
    const orangeColor = '#EF7822';
    const orangeColor2 = '#ff903f';
    const PrimaryButton = styled(Button)(({ theme }) => ({
        color: '#fff',
        backgroundColor: orangeColor,
        '&:hover': {
            backgroundColor: orangeColor2,
        },
    }));
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (

        <Box>
            <Grid item container md={12} lg={12} xs={12}>
                <Grid item md={12} lg={12} xs={12} sx={{ padding: '10px 0px', background: '#F3F5F9' }}>
                    <Typography sx={{ textAlign: 'center' }}>Search result for <span style={{ color: '#EF7822' }}>"Asian food"</span> 25 food found </Typography>
                </Grid>
            </Grid>
            <Grid item container md={12} lg={12} xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Grid item md={12} lg={12} xs={12} sx={{ padding: '20px 0px', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <Button sx={{ background: '#F3F5F9', color: 'black', width: '179px' }}>Foodmd</Button>
                    <PrimaryButton sx={{ color: 'white', width: '179px' }}>Resturant</PrimaryButton>
                </Grid>
            </Grid>
            <Grid item container md={12} lg={12} xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
                <Grid item md={12} lg={12} xs={12} sx={{ padding: '20px 0px', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <Button sx={{ background: ' rgba(239, 120, 34, 0.1)', color: 'black', width: '179px', display: 'flex', alignItems: 'center', gap: '20px' }}>

                        <img src={buttonImg.src} alt="" />   Foodxs</Button>
                    <Button sx={{ background: ' rgba(239, 120, 34, 0.1)', color: 'black', width: '179px', display: 'flex', alignItems: 'center', gap: '20px' }}> <img src={buttonImg2.src} alt="" />  Resturant</Button>

                </Grid>
            </Grid>

            <Grid container item md={12} lg={12} xs={12} spacing={{ xs: 2, md: 3 }} sx={{ padding: '20px 0px' }}>
                <Grid item md={8} xs={12} >
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        className='toggle__btn'
                    >
                        <ToggleButton className='tggle__btn0' value="web">Veg</ToggleButton>
                        <ToggleButton className='tggle__btn1' value="android">Non-Veg</ToggleButton>

                    </ToggleButtonGroup>
                    <Typography variant='h4' sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center', paddingTop: '15px' }}>We found <span style={{ color: '#EF7822' }}>25</span> food for you</Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Grid item container md={12} lg={12} xs={12}>
                        <Grid item md={6} xs={6} >
                            <Dropdown >
                                <Dropdown.Toggle style={{ background: 'none', border: '1px solid #FFEBDD', color: '#4B566B' }} variant="success" id="dropdown-basic">
                                    <GridViewOutlinedIcon />  Sort Grid: 20
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid>
                        <Grid item md={6} xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Dropdown >
                                <Dropdown.Toggle style={{ background: 'none', border: '1px solid #FFEBDD', color: '#4B566B' }} variant="success" id="dropdown-basic">
                                    <AddRoadOutlinedIcon />  Sort by: Default
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container item lg={12} md={12} spacing={2}>
                <Grid item lg={3} md={3} xs={6}>
                    <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                        <Typography className='offer__tag' >30% OFF</Typography>

                        <CardMedia
                            component="img"
                            alt="green iguana"
                            maxHeight="250"
                            image={img.src}
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
                <Grid item lg={3} md={3} xs={6}>
                    <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                        <Typography className='offer__tag' >30% OFF</Typography>

                        <CardMedia
                            component="img"
                            alt="green iguana"
                            maxHeight="250"
                            image={img.src}
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
                <Grid item lg={3} md={3} xs={6}>
                    <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                        <Typography className='offer__tag' >30% OFF</Typography>

                        <CardMedia
                            component="img"
                            alt="green iguana"
                            maxHeight="250"
                            image={img.src}
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
                <Grid item lg={3} md={3} xs={6}>
                    <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                        <Typography className='offer__tag' >30% OFF</Typography>

                        <CardMedia
                            component="img"
                            alt="green iguana"
                            maxHeight="250"
                            image={img.src}
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
                <Grid item lg={3} md={3} xs={6}>
                    <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                        <Typography className='offer__tag' >30% OFF</Typography>

                        <CardMedia
                            component="img"
                            alt="green iguana"
                            maxHeight="250"
                            image={img.src}
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
                <Grid item lg={3} md={3} xs={6}>
                    <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                        <Typography className='offer__tag' >30% OFF</Typography>

                        <CardMedia
                            component="img"
                            alt="green iguana"
                            maxHeight="250"
                            image={img.src}
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
                <Grid item lg={3} md={3} xs={6}>
                    <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
                        <Typography className='offer__tag' >30% OFF</Typography>

                        <CardMedia
                            component="img"
                            alt="green iguana"
                            maxHeight="250"
                            image={img.src}
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

            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '30px 0px 70px 0px' }}>
                <Stack spacing={2} >
                    <Pagination count={10} />
                </Stack>
            </Box>
        </Box >

    );
};

export default SearchpageFood;