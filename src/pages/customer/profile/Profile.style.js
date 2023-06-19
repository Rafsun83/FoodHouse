import { styled } from '@mui/material/styles'
import { Grid, Avatar, Box, Button, TextField } from '@mui/material'


export const SaveButton = styled(Button)(({theme})=>({
    // sx={{color:'white', background:'#EF7822', width:'170px'}} 
    color:'white',
    // width:'70px',
    // height:'42px',
    background:'#EF7822',
    
    [theme.breakpoints.up('xs')]: {
        width: '170px',
        height: '42.04px',
           
    },
    [theme.breakpoints.up('md')]: {
        width: '170px',
        color:'black'
       
        
    },

}))

export const ButtonBox = styled(Box)(({theme})=>({
    [theme.breakpoints.up('xs')]: {
          display:'flex',
          justifyContent:'center'
    },
    [theme.breakpoints.up('md')]: {
        display:'flex',
        justifyContent:'end'
    },
}))