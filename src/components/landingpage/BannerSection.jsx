import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import BannerOne from '../../../public/static/banners/BannerOne.png'
import BannerTwo from '../../../public/static/banners/BannerTwo.png'
import HomeBannerLg from '../../../public/static/banners/HomeBannerLg.png'

const BannerSection = () => {
  return (
    <>
        <Box className='banner-section-wrap'>
            <Grid container spacing={2} className='banner-section' sx={{ my: 1 }}>
                <Grid item xs={12} md={6} className='banner-item sm'>
                    <Card elevation={0} className='banner-card-sm rtl' sx={{ backgroundImage: `url(${BannerOne.src})` }}>
                        <Typography variant='h6'>AUTHENTIC ASIAN COUSINE</Typography>
                        <Typography sx={{ mt: 1 }}>Fast Home Delivery</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} className='banner-item sm'>
                    <Card elevation={0} className='banner-card-sm ltr' sx={{ backgroundImage: `url(${BannerTwo.src})` }}>
                        <Typography variant='h6'>BEST TACOS AROUND</Typography>
                        <Typography sx={{ mt: 1 }}>Fast Home Delivery</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} className='banner-item lg'>
                    <Card elevation={0} className='banner-card-lg ltr' sx={{ backgroundImage: `url(${HomeBannerLg.src})` }}>
                        <Typography variant='h6'>DISCOUNT UPTO 20%</Typography>
                        <Typography sx={{ mt: 1 }}>for Chinese, Japanies & Asian foods</Typography>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default BannerSection