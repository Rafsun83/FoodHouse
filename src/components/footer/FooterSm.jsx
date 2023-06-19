import React from 'react';
import { Box, Container, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
//import FooterLogo from '../../Assets/footer-logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadComponent from '../landingpage/DownloadComponent';
import LetsConnect from './LetsConnect';
import LogoColor from '../../../public/static/header/logo.png';


const FooterSm = props => {
  return (
    <>
      <Box {...props}>
        <Box className='footer-top'>
          <Container>
            <Grid container alignItems={'center'}>
              <Grid item xs={12} md={5}>
                <img src={LogoColor.src} alt="Footer Logo" className="footer-logo" />
                <DownloadComponent className='download-component' />
                <LetsConnect />
              </Grid>
              <Grid item xs={12} md={3} sx={{ mt: 3 }}>
                <Box textAlign={'center'}>
                  <Typography color={'#828282'} className='font-signika-negative'>24/7 Helpline</Typography>
                  <Typography variant='h6' sx={{ fontWeight: '700' }} color={'#473E38'} className='font-signika-negative'>+760 3498768</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} sx={{ mb: 3 }}>
                <Stack direction={'column'}>
                  <Stack direction={'row'} spacing={1} justifyContent={'center'}>
                    <IconButton sx={{ color: "#EF7822" }} aria-label="Facebook">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#EF7822" }} aria-label="Instagram">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#EF7822" }} aria-label="LinkedIn">
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#EF7822" }} aria-label="Twitter">
                      <TwitterIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box className='footer-middle'>
          <Container>
            <Grid container>
              <Grid item xs={12} md={5}>
                <Grid container>
                  <Grid item xs={12} md={6} sx={{ mb: 3 }}>
                    <Stack className='footer-menu' direction={'column'} spacing={2} justifyContent={'center'} textAlign={'center'} sx={{ color: '#000' }}>
                      <Typography variant='h6' fontWeight={700} className='footer-menu-title'>My account</Typography>
                      <Link href="#" underline="none" color="#000000">Profile</Link>
                      <Link href="#" underline="none" color="#000000">Address</Link>
                      <Link href="#" underline="none" color="#000000">My Orders</Link>
                      <Link href="#" underline="none" color="#000000">Wallet</Link>
                      <Link href="#" underline="none" color="#000000">Loyality Points</Link>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ mb: 3 }}>
                    <Stack className='footer-menu' direction={'column'} spacing={2} justifyContent={'center'} textAlign={'center'} sx={{ color: '#000' }}>
                      <Typography variant='h6' fontWeight={700} className='footer-menu-title'>Others</Typography>
                      <Link href="#" underline="none" color="#000000">Terms & Conditions</Link>
                      <Link href="#" underline="none" color="#000000">Privacy Policies</Link>
                      <Link href="#" underline="none" color="#000000">Help & Support</Link>
                      <Link href="#" underline="none" color="#000000">About Us</Link>
                      <Link href="#" underline="none" color="#000000">Contact Us</Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={2}>
                <Stack className='footer-menu' direction={'column'} spacing={2} justifyContent={'center'} textAlign={'center'} sx={{ color: '#000' }}>
                  <Typography variant='h6' fontWeight={700} className='footer-menu-title'>Quick Links</Typography>
                  <Link href="#" underline="none" color="#000000">Campaigns</Link>
                  <Link href="#" underline="none" color="#000000">Restaurants</Link>
                  <Link href="#" underline="none" color="#000000">Language</Link>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box className='footer-bottom'>
          <Container>
            <Grid container alignItems={'center'}>
              <Grid item xs={12}>
                <Typography color={'#000'} textAlign={'center'} fontWeight={600} >Copyright © 2021 array it Ltd</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default FooterSm