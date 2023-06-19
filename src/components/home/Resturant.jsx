import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Dropdown } from 'react-bootstrap';
import FilterListIcon from '@mui/icons-material/FilterList';
import Resturant0 from '../../../public/static/Resturantimage/Rectangle 8239.png'
import Resturant1 from '../../../public/static/Resturantimage/Rectangle 8240.png'
import Resturant2 from '../../../public/static/Resturantimage/Rectangle 8241.png'
import Resturant3 from '../../../public/static/Resturantimage/Rectangle 8242.png'
import Resturant4 from '../../../public/static/Resturantimage/Rectangle 8243.png'
import Resturant5 from '../../../public/static/Resturantimage/Rectangle 8244.png'
import Resturant6 from '../../../public/static/Resturantimage/Rectangle 8245.png'
import Resturant7 from '../../../public/static/Resturantimage/Rectangle 8246.png'
import Resturant8 from '../../../public/static/Resturantimage/Rectangle 8247.png'
import Resturant9 from '../../../public/static/Resturantimage/Rectangle 8248.png'
import { Box, Typography, Button } from '@mui/material';

const Resturant = () => {
    return (
        <Box className='resturanttop'>

            <Grid container item lg={12} md={12} xs={12} sm={12} sx={{ alignItems: 'center', paddingBottom: '30px' }}>
                <Grid className='res__turant' item md={6} lg={6} xs={6} sm={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Typography sx={{ fontSize: '26px', fontWeight: '800' }} className='review_title' >Best Resturants</Typography>
                </Grid>
                <Grid item md={6} lg={6} xs={6} sm={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Dropdown >
                        <Dropdown.Toggle style={{ background: 'none', border: '1px solid #FFEBDD', color: 'black' }} variant="success" id="dropdown-basic">
                            <FilterListIcon />  Filter by: All
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Grid>

            </Grid>


            <Grid item container lg={12} md={12} spacing={{ xs: 2, md: 2 }} rowGap='30px'>
                <Grid item lg={2} sm={4} xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img className='resturant__img' src={Resturant0.src} alt="" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >Chessy Resturant</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >4.5 <StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
                        </Box>
                    </Box>
                </Grid>
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


            <Box className='seemore__btn'>
                <Button className='btn__seemore'>See more</Button>
            </Box>


        </Box>
    );
};

export default Resturant;