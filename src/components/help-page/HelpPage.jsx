import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../../../public/static/help/image 43.png'
import img1 from '../../../public/static/help/image 47.png'
import img2 from '../../../public/static/help/image 46.png'
import img3 from '../../../public/static/help/image 45.png'
import {
    HelpBox,
    HelpTypographyBox,
    VisitBox,
    HelpImgBox,
    HelpGrid
} from './Help.style'
const HelpPage = () => {
    return (
        <Box>
            <Grid container md={12} xs={12}>
                <Grid item md={12} xs={12}>
                    <HelpBox>
                        <img src={img.src} alt="" />
                    </HelpBox>
                </Grid>
                <Grid item md={12} xs={12}>
                    <HelpTypographyBox>
                        <Typography sx={{ fontSize: '32px', fontWeight: '600' }}>Need Any help?</Typography>
                        <Typography sx={{ color: '#9B9B9B' }}>Communicate with our support team to get  propoer guidence to your quesnaries.</Typography>
                    </HelpTypographyBox>
                </Grid>

            </Grid>

            <HelpGrid container md={12} xs={12} spacing={2}>
                <Grid item md={4} xs={12}>
                    <VisitBox>
                        <HelpImgBox>
                            <img src={img1.src} alt="" />
                        </HelpImgBox>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '26px', fontWeight: '700' }}>VISIT US</Typography>
                            <Typography sx={{ fontSize: '14px', color: '#333333' }}>Office no. G-02. Building 1, Ground Floor. Dubai Media City – Dubai</Typography>
                        </Box>
                    </VisitBox>
                </Grid>
                <Grid item md={4} xs={12}>
                    <VisitBox>
                        <HelpImgBox>
                            <img src={img2.src} alt="" />
                        </HelpImgBox>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '26px', fontWeight: '700' }}>EMAIL US</Typography>
                            <Typography sx={{ fontSize: '14px', color: '#333333' }}>flick@flick.com
                            </Typography>
                        </Box>
                    </VisitBox>
                </Grid>
                <Grid item md={4} xs={12}>
                    <VisitBox>
                        <HelpImgBox>
                            <img src={img3.src} alt="" />
                        </HelpImgBox>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '26px', fontWeight: '700' }}>CALL US</Typography>
                            <Typography sx={{ fontSize: '14px', color: '#333333' }}>
                                +971-4-576-6770
                                +971-55-983-7007
                            </Typography>
                        </Box>
                    </VisitBox>
                </Grid>

            </HelpGrid>
        </Box>
    );
};

export default HelpPage;