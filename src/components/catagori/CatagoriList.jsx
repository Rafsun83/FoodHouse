import React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import catagori from '../../../public/static/featurecatagori/image 11.png'
import {
    CatagoriCardPaper,
    CatagoriImg

} from './Catagori.style'

const CatagoriList = () => {
    return (
        <Box>
            <CatagoriCardPaper elevation={0}>
                <CatagoriImg>
                    <img src={catagori.src} alt="" />
                </CatagoriImg>
                <Stack
                    sx={{ textAlign: 'center' }}
                >
                    <Typography variant='h4'>Chinese Food</Typography>
                    <Typography variant='h6'>(25 Items)</Typography>
                </Stack>
            </CatagoriCardPaper>
        </Box>
    );
};

export default CatagoriList;