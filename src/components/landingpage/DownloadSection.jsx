import React from 'react';
import { Box, Grid } from '@mui/material';
import DownloadComponent from './DownloadComponent';
import DownloadBanner from '../../../public/static/banners/DownloadBanner.png';


const DownloadSection = () => {
  return (
    <>
        <Box className='banner-section-wrap'>
            <Grid container spacing={2} className='banner-section' sx={{ my: 1 }} alignItems={'center'}>
                <Grid item xs={12} md={6} className='app-banner-column'>
                    <img src={DownloadBanner.src} alt="App View" className='app-banner' />
                </Grid>
                <Grid item xs={12} md={6} className='banner-item'>
                    <DownloadComponent className='download-component' />
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default DownloadSection