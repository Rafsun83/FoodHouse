import React from 'react';
import { Box, Container, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import FooterLogo from '../../../public/static/footer/footer-logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
//import DownloadComponent from '../Home/DownloadComponent';
import LetsConnect from './LetsConnect';
import DownloadComponent from '../landingpage/DownloadComponent';

const FooterLg = props => {
  return (
    <>
      <Box {...props}>
        <Box className='footer-top'>
          <Container>
            <Grid container alignItems={'center'}>
              <Grid item xs={12} md={5}>
                <img src={FooterLogo.src} alt="Footer Logo" className="footer-logo" />
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack direction={'column'}>
                  <Typography sx={{ pl: 1 }} className='font-signika-negative'>Follow us on</Typography>
                  <Stack direction={'row'} spacing={1}>
                    <IconButton sx={{ color: "#fff" }} aria-label="Facebook">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#fff" }} aria-label="Instagram">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#fff" }} aria-label="LinkedIn">
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#fff" }} aria-label="Twitter">
                      <TwitterIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box textAlign={'right'}>
                  <Typography color={'#9EA2AA'} className='font-signika-negative'>24/7 Helpline</Typography>
                  <Typography variant='h6' sx={{ fontWeight: '400' }} className='font-signika-negative'>+760 3498768</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box className='footer-middle'>
          <Container>
            <Grid container>
              <Grid item xs={12} md={5}>
                <DownloadComponent />
                <LetsConnect />
              </Grid>
              <Grid item xs={12} md={5}>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Stack className='footer-menu' direction={'column'} spacing={2} justifyContent={'flex-start'} sx={{ color: '#fff' }}>
                      <Typography variant='h6' className='footer-menu-title'>My account</Typography>
                      <Link href="#" underline="none" color="#B9B9B9">Profile</Link>
                      <Link href="#" underline="none" color="#B9B9B9">Address</Link>
                      <Link href="#" underline="none" color="#B9B9B9">My Orders</Link>
                      <Link href="#" underline="none" color="#B9B9B9">Wallet</Link>
                      <Link href="#" underline="none" color="#B9B9B9">Loyality Points</Link>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack className='footer-menu' direction={'column'} spacing={2} justifyContent={'flex-start'} sx={{ color: '#fff' }}>
                      <Typography variant='h6' className='footer-menu-title'>Others</Typography>
                      <Link href="#" underline="none" color="#B9B9B9">Terms & Conditions</Link>
                      <Link href="#" underline="none" color="#B9B9B9">Privacy Policies</Link>
                      <Link href="#" underline="none" color="#B9B9B9">Help & Support</Link>
                      <Link href="#" underline="none" color="#B9B9B9">About Us</Link>
                      <Link href="#" underline="none" color="#B9B9B9">Contact Us</Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={2}>
                <Stack className='footer-menu' direction={'column'} spacing={2} justifyContent={'flex-end'} textAlign={'right'} sx={{ color: '#fff' }}>
                  <Typography variant='h6' className='footer-menu-title'>Quick Links</Typography>
                  <Link href="#" underline="none" color="#B9B9B9">Campaigns</Link>
                  <Link href="#" underline="none" color="#B9B9B9">Restaurants</Link>
                  <Link href="#" underline="none" color="#B9B9B9">Language</Link>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box className='footer-bottom'>
          <Container>
            <Grid container alignItems={'center'}>
              <Grid item xs={12} md={6}>
                <Typography>Copyright © 2021 array it Ltd</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction={'row'} spacing={2} justifyContent={'flex-end'} sx={{ color: '#fff' }}>
                  <Link href="#" component="button" underline="none" color="inherit">Terms & Conditions</Link>
                  <Link href="#" component="button" underline="none" color="inherit">Privacy Policy</Link>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default FooterLg