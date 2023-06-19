import React from 'react';
import { Box, Button, Container, Grid, Pagination, Stack, Typography } from '@mui/material'; 
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import OrderImg from '../../../public/static/order/Rectangle 8233 (1).png'

import {
    PastButtion,
    ActiveButtonGrid,
    ActiveButtion,
    ButtonGrid,
    PendingButton,
    TrackhButton,
    ButtonTypography,
    OrderGrid,
    OrderPegination,
    OrderAmountTypography,
    DateTypography,
    OrderIdTypography,
    OrderBox
} from './OrderHistory.style';

const OrderHist = () => {
    return (
        <>
            <OrderBox>
                        <Grid container item md={12} lg={12} xs={12} spacing={{xs:1, md:1}}>                  
                         <Grid item md={2.5} xs={3.5} sm={3.5}>                          
                            <img src={OrderImg.src} alt="" />                          
                        </Grid>
                        <Grid item md={8.5} xs={8.5} sm={8.5}>
                            <OrderIdTypography variant="h3"> <span style={{ color: '#EF7822' }}>Order ID</span> #325232</OrderIdTypography>
                            <DateTypography>15 April, 2022</DateTypography>
                            <OrderAmountTypography>Order Amount: $123.76</OrderAmountTypography>
                            <ButtonTypography>
                                <PendingButton size="small">Pending</PendingButton>
                                <TrackhButton size="small"> <LocalShippingIcon sx={{fontSize:'14px'}} /> Track Order</TrackhButton>
                            </ButtonTypography>
                        </Grid>                   
                    </Grid>
                </OrderBox>
        </>
    );
};

export default OrderHist;