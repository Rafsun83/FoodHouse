import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';
import img from '../../../public/static/checkout/Rectangle 8221.png'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
    WishlistGrid,
    IconButtonGrid,
    WishlistBox,
    ArrowButton,
    CatagoriName
} from './WishList.style'

const WishlistCard = () => {
    return (
        <WishlistBox>
            <Grid container md={12} xs={12} spacing={{ xs: 1 }}>
                <Grid item md={2} xs={2}>

                    {/* <Typography>Veg</Typography> */}


                    <img src={img.src} alt="" />
                </Grid>
                <Grid item md={8} xs={8}>
                    <Typography>Peporoni Pizza With Japanese Japaeno and Olive...</Typography>
                    <Typography>Qty: 2</Typography>
                    <Typography><span style={{ color: 'red', fontSize: '14px', textDecoration: 'line-through' }}>$13.9</span> <span style={{ color: '#4B566B', fontSize: '23px' }}>$72.25</span> </Typography>
                </Grid>
                <IconButtonGrid item md={2} xs={2}>
                    <IconButton>
                        <DeleteIcon sx={{ color: '#FF4B55' }} />
                    </IconButton>
                    <ArrowButton size="small"> <ArrowForwardIcon /></ArrowButton>

                </IconButtonGrid>
            </Grid>
        </WishlistBox>
    );
};

export default WishlistCard;