import React from 'react';
import { Box, Divider, Grid, Step, StepLabel, Stepper, Typography } from '@mui/material';

import {
    OrderDetailBox,
    HeadingBox,
    OrderDetailGrid,
    StepBox

} from './Tracking.style'
import MapDirections from '../landingpage/MapDirections';
const steps = [
    'Order Place',
    'Order Confirm',
    'Preparing Food',
    'Food is on the way',
    'Deliverd'
];

const TrackingPage = () => {
    return (
        <OrderDetailBox>
            <OrderDetailGrid container item md={12} xs={12}>
                <Grid item md={12} xs={12}>
                    <HeadingBox>
                        <Typography sx={{ color: '#EF7822', fontSize: '36px', fontWeight: '600' }}>Order#156222</Typography>
                        <Typography>Order placed: 15 April, 2022, 4:30pm</Typography>
                    </HeadingBox>
                    <Divider />
                </Grid>
                <Grid item md={12} xs={12}>
                    <StepBox>
                        <Stepper activeStep={1} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </StepBox>
                </Grid>
                <Grid item md={12} xs={12}>
                    <MapDirections />
                </Grid>

            </OrderDetailGrid>





        </OrderDetailBox>
    );
};

export default TrackingPage;