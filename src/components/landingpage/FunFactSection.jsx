import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material';
import FastDelivery from '../../../public/static/icons/fast-delivery.png';
import FreshFood from '../../../public/static/icons/fresh-food.png';
import LotsOfChoice from '../../../public/static/icons/lots-of-choice.png';

const FunFactSection = () => {

    const orangeColor = '#EF7822';
    const orangeColor2 = '#ff903f';

    return (
        <>
            <Box className='funfact-section-wrap'>
                <Grid container spacing={2} columnSpacing="0" className='funfact-section' sx={{ my: 1 }}>
                    <Grid item xs={4} className='funfact-item-wrap'>
                        <Box className='funfact-item'>
                            <Stack
                                direction={'column'}
                                alignItems="center"
                                textAlign="center"
                                spacing={2}
                            >
                                <img src={FastDelivery.src} alt="icon" className='funfact-icon' />
                                <Typography>Fast Delivery</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={4} className='funfact-item-wrap'>
                        <Box className='funfact-item'>
                            <Stack
                                direction={'column'}
                                alignItems="center"
                                textAlign="center"
                                spacing={2}
                            >
                                <img src={FreshFood.src} alt="icon" className='funfact-icon' />
                                <Typography>Fresh Food</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={4} className='funfact-item-wrap'>
                        <Box className='funfact-item'>
                            <Stack
                                direction={'column'}
                                alignItems="center"
                                textAlign="center"
                                spacing={2}
                            >
                                <img src={LotsOfChoice.src} alt="icon" className='funfact-icon' />
                                <Typography>1000+ Restaurant</Typography>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default FunFactSection