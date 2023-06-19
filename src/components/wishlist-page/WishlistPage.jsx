import React from 'react';
import { Box, Button, Grid, IconButton, Pagination, Stack, Typography } from '@mui/material';
import { Dropdown } from 'react-bootstrap';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';
import img from '../../../public/static/checkout/Rectangle 8221.png'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
    WishlistGrid,
    IconButtonGrid,
    WishlistBox,
    ArrowButton
} from './WishList.style'
import WishlistCard from './WishlistCard';


const WishlistPage = () => {
    return (
        <Box>
            <WishlistGrid container item md={12}>
                <Grid item md={8} xs={12}>
                    <Typography sx={{ fontSize: '26px', color: '#4B566B' }}>Your Favourites</Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Grid container md={12}>
                        <Grid item md={6}>
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
                        <Grid item md={6}>
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
            </WishlistGrid>

            <Grid container item md={12} xs={12} spacing={2}>
                <Grid item md={6} xs={12}>
                    <WishlistCard />
                </Grid>
                <Grid item md={6} xs={12}>
                    <WishlistCard />
                </Grid>
                <Grid item md={6} xs={12}>
                    <WishlistCard />
                </Grid>
                <Grid item md={6} xs={12}>
                    <WishlistCard />
                </Grid>
                <Grid item md={6} xs={12}>
                    <WishlistCard />
                </Grid>
                <Grid item md={6} xs={12}>
                    <WishlistCard />
                </Grid>

            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '30px 0px 70px 0px' }}>
                <Stack spacing={2} >
                    <Pagination count={10} />
                </Stack>
            </Box>
        </Box>
    );
};

export default WishlistPage;