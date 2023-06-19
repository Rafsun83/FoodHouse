import React from 'react'
import { Grid, Avatar, Box, Button, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import wallet from '../../../../public/static/profile/image 38 (1).png'
import user from '../../../../public/static/profile/image 38 (2).png'
import profileImg from '../../../../public/static/profile/pro.png'
import img from '../../../../public/static/profile/image 38 (3).png'
import img1 from '../../../../public/static/profile/image 38 (4).png'
const maxValue = 100

import {
    SaveButton,
    ButtonBox
} from './Profile.style'

const Profile = () => {
    return (
        <>
            <Grid xs={12} container spacing={{xs:2,md:4}} sx={{ paddingTop: '40px',paddingBottom:'15px' }}>
                <Grid item xs={6} sm={6} md={3}>
                    <Card sx={{ minWidth: 100 }}>
                        <CardContent>
                            <Grid container md={12} xs={12} sx={{ textAlign: 'center' }}>
                                <Grid item md={10} xs={10}>
                                    <Typography
                                        sx={{ fontSize: 30, color: '#EF7822', fontWeight: '500' }}
                                    >
                                        263
                                    </Typography>
                                    <Typography sx={{ fontSize: '12px' }}>days since joining</Typography>
                                </Grid>
                                <Grid item md={2} xs={2}>
                                    <Typography>
                                        <img src={user.src} alt="" />
                                    </Typography>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Card sx={{ minWidth: maxValue }}>
                        <CardContent>
                            <Grid container md={12} xs={12} sx={{ textAlign: 'center' }}>
                                <Grid item md={10} xs={10}>
                                    <Typography
                                        sx={{ fontSize: 30, color: '#EF7822', fontWeight: '500' }}
                                    >
                                        300
                                    </Typography>
                                    <Typography sx={{ fontSize: '12px' }}>days since joining</Typography>
                                </Grid>
                                <Grid item md={2} xs={2}>
                                    <Typography>
                                        <img src={wallet.src} alt="" />
                                    </Typography>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Card sx={{ minWidth: maxValue }}>
                        <CardContent>
                            <Grid container md={12} xs={12} sx={{ textAlign: 'center' }}>
                                <Grid item md={10} xs={10}>
                                    <Typography
                                        sx={{ fontSize: 30, color: '#EF7822', fontWeight: '500' }}
                                    >
                                        223
                                    </Typography>
                                    <Typography sx={{ fontSize: '12px' }}>days since joining</Typography>
                                </Grid>
                                <Grid item md={2} xs={2}>
                                    <Typography>
                                        <img src={img.src} alt="" />
                                    </Typography>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Card sx={{ minWidth: maxValue }}>
                        <CardContent>
                            <Grid container md={12} xs={12} sx={{ textAlign: 'center' }}>
                                <Grid item md={10} xs={10}>
                                    <Typography
                                        sx={{ fontSize: 30, color: '#EF7822', fontWeight: '500' }}
                                    >
                                        200
                                    </Typography>
                                    <Typography sx={{ fontSize: '12px' }}>days since joining</Typography>
                                </Grid>
                                <Grid item md={2} xs={2}>
                                    <Typography>
                                        <img src={img1.src} alt="" />
                                    </Typography>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>



            <Grid container md={12} xs={12} sx={{background:'#FBFBFB', borderRadius:'10px'}}>

                <Grid container md={12} xs={12} spacing={2} sx={{padding:'20px'}}>
                    <Grid item md={12} xs={12}>
                        <Box sx={{ display:'flex',justifyContent: 'center', paddingTop: '2rem' }}>
                            <img src={profileImg.src} />

                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="Enter First Name"
                            variant="outlined" />

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="Enter Last Name"
                            variant="outlined" />

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="Enter Email"
                            variant="outlined" />

                    </Grid>
                    <Grid item md={6} xs={12}>
                    <TextField 
                      label="Enter Phone number"
                      variant="outlined"
                    sx={{width:'100%'}}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />

                        

                    </Grid>

                    <Grid item md={12} xs={12}>
                      <ButtonBox>
                      <SaveButton                       
                        >Save</SaveButton>                       
                      </ButtonBox>
                    </Grid>
                </Grid>
            </Grid>


            <Grid container md={12} xs={12} sx={{background:'#FBFBFB', borderRadius:'10px', margin:'15px 0px 40px 0px'}}>

                <Grid container md={12} xs={12} spacing={2} sx={{padding:'20px'}}>
                    <Grid item md={12} xs={12}>
                        <Box sx={{ textAlign:'center',color:'#4B566B', fontWeight:'700' }}>
                           <Typography>Account Information</Typography>

                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined" />

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="Confirm Password"
                            variant="outlined" />

                    </Grid>
                

                    <Grid item md={12} xs={12}>
                      <ButtonBox>
                      <SaveButton
                        >Change</SaveButton>
                        
                      </ButtonBox>
                    </Grid>
                </Grid>
            </Grid>

            
        </>
    );
};

export default Profile;
