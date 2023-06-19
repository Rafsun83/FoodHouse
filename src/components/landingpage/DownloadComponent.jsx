import React from 'react';
import { Box, Button, Grid, Stack, styled, Typography } from '@mui/material';
import GooglePlay from '../../../public/static/GooglePlay.png';
import AppStore from '../../../public/static/AppStore.png';

const DownloadComponent = props => {

    const ImageButton = styled(Button)(({ theme }) => ({
        width: '153px',
        height: '50px',
        padding: '0'
    }));

    return (
        <>
            <Box {...props}>
                <Typography className='download-title' variant='h6'>Download app to enjoy more!</Typography>
                <Typography className='download-subtitle' sx={{ mt: 1 }}>Download our app from google play store & app store.</Typography>
                <Stack direction={'row'} spacing={2} className="download-buttons" sx={{ mt: 2 }}>
                    <Button className='image-btn'>
                        <img src={GooglePlay.src} alt="GooglePlay" />
                    </Button>
                    <Button className='image-btn'>
                        <img src={AppStore.src} alt="AppStore" />
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default DownloadComponent