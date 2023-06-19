import React from 'react';
import { Box, Button, Container, Grid, Pagination, Stack, Typography } from '@mui/material';
import PastImg from '../../../public/static/order/image 29.png'
import ActiveImg from '../../../public/static/order/image 29 (1).png'


import {
    PastButtion,
    ActiveButtonGrid,
    ActiveButtion,
    ButtonGrid,
    OrderPegination,
    TopButtonTypography,
    Image
} from './OrderHistory.style';
import OrderHist from './OrderHist';

const OrderHistoryPage = () => {
    return (
        <Container>
            <ButtonGrid>
                <Grid justifyContent="center" container xs={12} spacing={1}>
                   <Grid  item xs={6} md={6}>
                        <ActiveButtonGrid >
                            <ActiveButtion> <Image src={ActiveImg.src} alt="" /> <TopButtonTypography>Active Button</TopButtonTypography></ActiveButtion>
                        </ActiveButtonGrid>
                    </Grid>
                    <Grid  item xs={6} md={6}>
                        <PastButtion >  <Image src={PastImg.src} alt="" /> <TopButtonTypography>Past Button</TopButtonTypography></PastButtion>
                    </Grid>
                </Grid>
            </ButtonGrid>
            <Grid container xs={12} md={12} lg={12} spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                    <OrderHist/>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <OrderHist/>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                <OrderHist/>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                 <OrderHist/>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                <OrderHist/>
                </Grid>

            </Grid>
            <OrderPegination >
                <Pagination count={10} />
            </OrderPegination>
        </Container>
    );
};

export default OrderHistoryPage;