import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../../public/static/featurecatagori/Rectangle 8223.png'
import { Box, Grid, styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Dropdown } from 'react-bootstrap';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import buttonImg from '../../../public/static/buttonImg/image 30.png'
import buttonImg2 from '../../../public/static/buttonImg/image 29.png'
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';
import Resturant0 from '../../../public/static/Resturantimage/Rectangle 8239.png';
import Resturant1 from '../../../public/static/Resturantimage/Rectangle 8240.png';
import Resturant2 from '../../../public/static/Resturantimage/Rectangle 8241.png';
import Resturant3 from '../../../public/static/Resturantimage/Rectangle 8242.png';
import Resturant4 from '../../../public/static/Resturantimage/Rectangle 8243.png';
import Resturant5 from '../../../public/static/Resturantimage/Rectangle 8244.png';
import Resturant6 from '../../../public/static/Resturantimage/Rectangle 8245.png';
import Resturant7 from '../../../public/static/Resturantimage/Rectangle 8246.png';
import Resturant8 from '../../../public/static/Resturantimage/Rectangle 8247.png';
import Resturant9 from '../../../public/static/Resturantimage/Rectangle 8248.png';

const SearchpageResturant = () => {

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
            <Grid item container md={12} lg={12} xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Grid item md={12} lg={12} xs={12} sx={{ padding: '10px 0px', background: '#F3F5F9' }}>
                    <Typography sx={{ textAlign: 'center', color: ' #4B566B' }}>Search result for <span style={{ color: '#EF7822' }}>"Asian food"</span> 25 food found </Typography>
                </Grid>
            </Grid>
            <Grid item container md={12} lg={12} xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Grid item md={12} lg={12} xs={12} sx={{ padding: '20px 0px', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <Button sx={{ background: '#F3F5F9', color: 'black', width: '179px' }}>Foodmd</Button>
                    <PrimaryButton sx={{ color: 'white', width: '179px' }}>Resturant</PrimaryButton>
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
                    <Typography variant='h4' sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center', paddingTop: '15px', color: ' #4B566B' }}>We found <span style={{ color: '#EF7822' }}>25</span> resturantsfor you</Typography>
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



            <Grid item container lg={12} md={12} spacing={{ xs: 2, md: 2 }} rowGap='30px'>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant1.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant2.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant3.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant4.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant3.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant6.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant7.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant8.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant9.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant5.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant7.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
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

export default SearchpageResturant;