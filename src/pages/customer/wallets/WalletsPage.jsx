import React from 'react';
import { Grid, Avatar, Box, Button, TextField,Typography,Divider } from '@mui/material'

const WalletsPage = () => {
    return (
        <>
                <Grid container md={12} xs={12} spacing={2} sx={{padding:'10px'}}>
                       <Grid item md={7} xs={6}>
                          <Typography sx={{fontWeight:'700'}}>$5632</Typography>
                          <Typography sx={{fontSize:'14px', color:'#9B9B9B'}}>Earned from order</Typography>
                       </Grid>
                       <Grid item md={3} xs={4}>
                           <Typography sx={{fontSize:'14px', color:'#9B9B9B'}}>28-05-2021, 5:30 AM</Typography>
                       </Grid>
                       <Grid item md={2} xs={2}>
                       <Typography sx={{fontSize:'14px', color:'#12B10F'}}>Credit</Typography>
                       </Grid>
                       

                   </Grid>
                   <Divider/>
        </>
    );
};

export default WalletsPage;