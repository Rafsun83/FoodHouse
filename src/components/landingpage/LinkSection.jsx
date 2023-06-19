import React from 'react';
import { Box, Button, Card, Grid, styled, Typography } from '@mui/material';
import VirtaulRestaurant from '../../../public/static/icons/VirtaulRestaurant.png';
import DeliveryMan from '../../../public/static/icons/DeliveryMan.png';
import Waves from './Waves';

const LinkSection = () => {

    const orangeColor = '#EF7822';
    const orangeColor2 = '#ff903f';

    const PrimaryButton = styled(Button)(({ theme }) => ({
        marginTop: '20px',
        color: '#fff',
        backgroundColor: orangeColor,
        '&:hover': {
            backgroundColor: orangeColor2,
        },
    }));

    return (
        <>
            <Box className='link-section-wrap'>
                <Grid container spacing={2} className='link-section' sx={{ my: 1 }}>
                    <Grid item xs={12} md={6} className='link-item'>
                        <Card elevation={0} className='link-card rtl'>
                            <img src={VirtaulRestaurant.src} alt="icon" className='link-icon' />
                            <Typography variant='h6'>Open your own  virtual restaurant on StackFood</Typography>
                            <PrimaryButton aria-label="Register" sx={{ flex: '1 0' }}>
                                Register
                            </PrimaryButton>
                        </Card>
                        <Waves sx={{ display: { xs: 'block', md: 'none'} }} />
                    </Grid>
                    <Grid item xs={12} md={6} className='link-item'>
                        <Card elevation={0} className='link-card ltr'>
                            <img src={DeliveryMan.src} alt="icon" className='link-icon' />
                            <Typography variant='h6'>Join as delivery man on StackFood</Typography>
                            <PrimaryButton aria-label="Register" sx={{ flex: '1 0' }}>
                                Register
                            </PrimaryButton>
                        </Card>
                        <Waves sx={{ display: { xs: 'block', md: 'none'} }} />
                    </Grid>
                </Grid>
                <Waves sx={{ display: { xs: 'none', md: 'block'}, mt: '-60px' }} />
            </Box>
        </>
    )
}

export default LinkSection