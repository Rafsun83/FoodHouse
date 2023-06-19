import React from 'react';
import { Box, Button, Container, Divider, Grid, IconButton, Modal, Typography } from '@mui/material';
import AddressPage from './AddressPage';
import {
    AddButton,
    ButtonBox
} from './Address.style'

const Addres = () => {   
    return (
        <Box sx={{padding:'16px', background:'#FBFBFB', borderRadius:'10px'}}>
            <Grid container md={12} xs={12} spacing={2}>
                <Grid item md={12} xs={12}>
                    <ButtonBox>
                       <AddButton >Add New +</AddButton>
                    </ButtonBox>
                </Grid>
                <Grid item md={6} xs={12} >
                     <AddressPage/>
                </Grid>
                <Grid item md={6} xs={12}>
                <AddressPage/>
                </Grid>
                <Grid item md={6} xs={12}>
                <AddressPage/>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Addres;