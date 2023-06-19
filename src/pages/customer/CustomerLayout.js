import React from 'react'
import { Grid } from '@mui/material'

import { CustomBodyContent, CustomBodyMain } from './Customer.style'
import MenuBar from './MenuBar'

const CustomerLayout = ({ component }) => {
    return (
        <>
            <Grid container md={12} spacing={3} sx={{paddingTop:'30px',paddingBottom:'70px'}}>
                <Grid item md={2.5} xs={12} sx={{display:{xs:'none', md:'block'}}}>
                    <MenuBar />
                </Grid>
                <Grid item md={9.5} xs={12}>
                    {/* <CustomBodyMain>
                    
                    </CustomBodyMain> */}
                    <CustomBodyContent>{component}</CustomBodyContent>
                     
                </Grid>
            </Grid>
        </>
    )
}

export default CustomerLayout
