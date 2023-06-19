import React from 'react';
import { Grid, Avatar, Box, Button, TextField,Typography,Divider } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Tropy from '../../../../public/static/profile/tropy.png'
import {
    WallateBox,
    WallateBoxSection
} from './Loyality.style';

import LoyalityPage from './LoyalityPage';

const Loyality = () => {
    return (
        <WallateBoxSection>
           <Grid container md={12} xs={12} spacing={2}>
               <Grid item md={12} xs={12} sx={{display:'flex', justifyContent:'center'}}>
                   <WallateBox>
                       <Grid container md={12} xs={12} spacing={2}>
                            <Grid item md={12} xs={12} >
                             <Box sx={{display:'flex', justifyContent:'center'}}>
                             <img src={Tropy.src} alt="" />
                             <Box>
                             <Typography sx={{fontSize:'24px', fontWeight:'700'}}>300</Typography>
                             <Typography sx={{fontSize:'12px'}}>Loyality Points !</Typography>
                             </Box>
                        
                             </Box>
                           </Grid>
                           <Grid item md={12} xs={12}>
                              <Button sx={{color:'white', background:'#EF7822', width:'100%'}}>Convert To currency Now</Button>
                           </Grid>

                       </Grid>
                   </WallateBox>
               </Grid>
               <Grid item md={12} xs={12}>
                   <Box sx={{padding:'10px'}}>
                       <Typography sx={{fontSize:'18px', fontWeight:'700'}}>Transaction History</Typography>
                   </Box>
                    <LoyalityPage/>               
                    <LoyalityPage/>               
                    <LoyalityPage/>               
                    <LoyalityPage/>               
                    <LoyalityPage/>               
               </Grid>

           </Grid>
       </WallateBoxSection>
    );
};

export default Loyality;