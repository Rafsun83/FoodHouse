import { styled } from '@mui/material/styles'
import { Box, Grid, Typography, Button } from '@mui/material';


export const WishlistGrid = styled(Grid)(() => ({
    padding: '30px 0px 30px 0px'
}))

export const IconButtonGrid = styled(Grid)(() => ({
    display: 'inline-grid',
    justifyContent: 'flex-end'
}))
export const WishlistBox = styled(Box)(() => ({
    background: '#FFFFFF',
    boxShadow: ' 0px 0px 6.65px rgba(0, 0, 0, 0.05)',
    borderRadius: '10px',
    padding: '10px'
}))
export const ArrowButton = styled(Button)(() => ({
    background: 'rgba(239, 120, 34, 0.05)',
    // background: 'black',
    borderRadius: '30px 0px 10px'
}))

// export const CatagoriName = styled(Box)(() => ({
//     zIndex: 1,
//     position: 'relative',
//     top: '79%',
//     background: 'rgba(0, 0, 0, 0.2)',
//     borderRadius: '0px 0px 5px 5px',
//     color: 'white',
//     display: 'flex',
//     justifyContent: 'center'

// }
// ))