import React from 'react';
import { Grid, Avatar, Box, Button, TextField,Typography,IconButton } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import img from '../../../../public/static/profile/fire.png'



const Coupons = () => {
    return (
         <Box>
             <Grid container md={12} xs={12} spacing={2}>
             <Grid item md={6} xs={12}>
                     <Box sx={{background:'#FFFFFF', border:'1px solid rgba(239, 120, 34, 0.1)',           borderRadius:'10px', textAlign:'center'}}>
                         <Grid container md={12} xs={12}>
                             <Grid item md={3} xs={3} sx={{background:'#FFF5ED'}}>
                               <Box sx={{padding:'20px'}}>
                               <img src={img.src} alt="" />
                                    <Typography sx={{color:'#EF7822', fontSize:'18px', fontWeight:'700'}}>35% Offer</Typography>
                               </Box>
                             </Grid>
                               <Grid item md={8} xs={8} sx={{padding:'30px'}}>
                                       <Typography>EID10 (EID OFFER)</Typography>
                                       <Typography sx={{fontSize:'12px', color:'#9B9B9B'}}>Expired on : 03-04-2022</Typography>
                                       <Typography sx={{fontSize:'12px', color:'#9B9B9B'}}>Min purchase:  $100, Max purchase:  $50.50</Typography>
                                      <Typography sx={{fontSize:'12px', color:'#9B9B9B'}}>Only for Hurgry Puppets Restaurant</Typography>
                               </Grid>
                              <Grid item md={1} xs={1}>
                                     <IconButton>
                                     <ContentCopyIcon sx={{color:'#EF7822'}} />
                                     </IconButton>
                               </Grid>

                         </Grid>
                     </Box>
                 </Grid>
                 <Grid item md={6} xs={12}>
                     <Box sx={{background:'#FFFFFF', border:'1px solid rgba(239, 120, 34, 0.1)',           borderRadius:'10px', textAlign:'center'}}>
                         <Grid container md={12} xs={12}>
                             <Grid item md={3} xs={3} sx={{background:'#FFF5ED'}}>
                             <Box sx={{padding:'20px'}}>
                               <img src={img.src} alt="" />
                                    <Typography sx={{color:'#EF7822', fontSize:'18px', fontWeight:'700'}}>35% Offer</Typography>
                               </Box>
                             </Grid>
                               <Grid item md={8} xs={8} sx={{padding:'30px'}}>
                                       <Typography>EID10 (EID OFFER)</Typography>
                                       <Typography sx={{fontSize:'12px', color:'#9B9B9B'}}>Expired on : 03-04-2022</Typography>
                                       <Typography sx={{fontSize:'12px', color:'#9B9B9B'}}>Min purchase:  $100, Max purchase:  $50.50</Typography>
                                      <Typography sx={{fontSize:'12px', color:'#9B9B9B'}}>Only for Hurgry Puppets Restaurant</Typography>
                               </Grid>
                              <Grid item md={1} xs={1}>
                              <IconButton>
                                     <ContentCopyIcon sx={{color:'#EF7822'}} />
                                     </IconButton>
                               </Grid>

                         </Grid>
                     </Box>
                 </Grid>
                 <Grid item md={6} xs={12}>
                     <Box sx={{background:'#FFFFFF', border:'1px solid rgba(239, 120, 34, 0.1)',           borderRadius:'10px', textAlign:'center'}}>
                         <Grid container md={12} xs={12}>
                             <Grid item md={3} xs={3} sx={{background:'#FFF5ED'}}>
                             <Box sx={{padding:'20px'}}>
                               <img src={img.src} alt="" />
                                    <Typography sx={{color:'#EF7822', fontSize:'18px', fontWeight:'700'}}>35% Offer</Typography>
                               </Box>
                             </Grid>
                               <Grid item md={8} xs={8} sx={{padding:'30px'}}>
                                       <Typography>EID10 (EID OFFER)</Typography>
                                       <Typography sx={{fontSize:'12px', color:'#9B9B9B'}}>Expired on : 03-04-2022</Typography>
                                       <Typography sx={{fontSize:'12px', color:'#9B9B9B'}}>Min purchase:  $100, Max purchase:  $50.50</Typography>
                                      <Typography sx={{fontSize:'12px', color:'#9B9B9B'}}>Only for Hurgry Puppets Restaurant</Typography>
                               </Grid>
                              <Grid item md={1} xs={1} >
                              <IconButton>
                                     <ContentCopyIcon sx={{color:'#EF7822'}} />
                                     </IconButton>
                                    
                               </Grid>

                         </Grid>
                     </Box>
                 </Grid>
             
             </Grid>
         </Box>
    );
};

export default Coupons;