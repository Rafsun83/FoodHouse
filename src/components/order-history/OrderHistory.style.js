import { styled } from '@mui/material/styles'
import { Box, Button, Grid, Typography } from '@mui/material';

export const PastButtion = styled(Button)(({theme}) => (console.log(theme),{
    borderRadius: '14px',
    background: 'rgba(239, 120, 34, 0.1)',
    display: 'block',
    [theme.breakpoints.up('xs')]: {
        width: '166.12px',
        height: '84.91px'
    },
    [theme.breakpoints.up('md')]: {
        width: '225px',
        height: '115px',
    },

}))
export const ActiveButtion = styled(Button)(({theme}) => ({
    borderRadius: '14px',
    display: 'block',
    color: 'black',
    [theme.breakpoints.up('xs')]: {
        width: '166.12px',
        height: '84.91px'
    },
    [theme.breakpoints.up('md')]: {
        width: '225px',
        height: '115px',
        
    },


}))
export const TopButtonTypography=styled(Typography)(({theme}) =>({
        
    [theme.breakpoints.up('xs')]:{
        fontSize:'12px'
    },
    [theme.breakpoints.up('md')]:{
        fontSize:'16px'
    },
}))

export const Image = styled('img')(({theme})=>({
    [theme.breakpoints.up('xs')]:{
        width:'42px'
    },
    [theme.breakpoints.up('md')]:{
        width:'57px'
    },
}))

export const ActiveButtonGrid = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'end'
}))


export const ButtonGrid = styled(Grid)(() => ({
    paddingTop: '30px',
    paddingBottom: '60px'
}))
export const PendingButton = styled(Button)(({theme}) => ({
    background: 'rgba(0, 95, 149, 0.1)',
    borderRadius: '5px',
    // width: '88px',
    // height: '30px',
    color: '#005F95',
    [theme.breakpoints.up('xs')]:{
        width: '59.68px',
        height: '20.56px',
        fontSize:'12px'
    },
    [theme.breakpoints.up('md')]:{
        width: '88px',
        height: '30px',
        fontSize:'16px'
    }

}))
export const TrackhButton = styled(Button)(({theme}) => ({
    // width: '150px',
    // height: '32px',
    background: '#EF7822',
    border: '1px solid rgba(239, 120, 34, 0.3)',
    borderRadius: '5px',
    color: 'white',
     gap: '5px',

    [theme.breakpoints.up('xs')]: {
        width: '105.24px',
        height: '27.12px',
        fontSize:'12px'
    },
    [theme.breakpoints.up('md')]: {
        width: '150px',
        height: '32px',
        fontSize:'16px'
        
    },

}))


export const OrderAmountTypography = styled(Typography)(({theme})=>({
    [theme.breakpoints.up('xs')]:{
        fontSize:'12px'
    },
    [theme.breakpoints.up('md')]:{
        fontSize:'16px'
    },

}))

export const DateTypography=styled(Typography)(({theme})=>({
    color:'#9B9B9B',
    [theme.breakpoints.up('xs')]:{
        fontSize:'12px'
    },
    [theme.breakpoints.up('md')]:{
        fontSize:'16px'
    },
}))
export const OrderIdTypography=styled(Typography)(({theme})=>({

    [theme.breakpoints.up('xs')]:{
        fontSize:'14px'
    },
    [theme.breakpoints.up('md')]:{
        fontSize:'22px'
    },
}))

export const ButtonTypography = styled(Typography)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))


export const OrderGrid = styled(Grid)(() => ({
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.08)',
    background: '#FFFFFF',
    padding: '10px'
}))

export const OrderBox = styled(Box)(()=>({
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.08)',
    background: '#FFFFFF',
    padding: '10px'
}))

export const OrderPegination = styled(Box)(()=>({
    display:'flex',
    justifyContent:'center',
    padding: '30px 0px 50px 0px'

}))