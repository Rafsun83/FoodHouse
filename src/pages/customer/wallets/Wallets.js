import React from 'react';
import { Grid, Avatar, Box, Button, TextField,Typography,Divider } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {
    WallateBox,
    WallateBoxSection
} from './Wallets.style';
import WalletsPage from './WalletsPage';

const Wallet = () => {
    return (
       <WallateBoxSection>
           <Grid container md={12} xs={12} spacing={2}>
               <Grid item md={12} xs={12} sx={{display:'flex', justifyContent:'center'}}>
                   <WallateBox>
                       <Grid container md={12} xs={12} spacing={2}>
                            <Grid item md={5} xs={6} sx={{display:'flex', justifyContent:'end'}}>
                             <AccountBalanceWalletIcon sx={{fontSize:'48px', color:'white'}}/>
                           </Grid>
                           <Grid item md={7} xs={6}>
                              <Typography sx={{fontSize:'16px', color:'white'}}>Wallate Amount</Typography>
                              <Typography sx={{fontSize:'24px', color:'white'}}>$132632</Typography>
                           </Grid>

                       </Grid>
                   </WallateBox>
               </Grid>
               <Grid item md={12} xs={12}>
                   <Box sx={{padding:'10px'}}>
                       <Typography sx={{fontSize:'18px', fontWeight:'700'}}>Transaction History</Typography>
                   </Box>
                   <WalletsPage/>
                   <WalletsPage/>                  
                   <WalletsPage/>                  
                   <WalletsPage/>                  
                   <WalletsPage/>                  
               </Grid>

           </Grid>
       </WallateBoxSection>
    );
};

export default Wallet;