import { styled } from '@mui/material/styles'
import { Autocomplete, Box, Button, Divider, Grid, IconButton, InputBase, MenuItem, Paper, TextField, Typography } from '@mui/material';

export const DeliveryTitle = styled(Typography)(() => ({
    textAlign: 'center',
    color: '#4B566B',
    fontSize: '16px',
    fontWeight: '700',
    paddingBottom: '20px'
}))
export const DeliveryCaption = styled(Typography)(() => ({
    fontSize: '16px',
    fontWeight: '700',
    color: '#414141',
    paddingTop: '30px',
    paddingBottom: '20px'
}))

export const PrefarableCaption = styled(Typography)(({theme})=>({
    fontSize: '16px',
    fontWeight: '700',
    color: '#414141',
    paddingTop: '30px',
    paddingBottom: '20px',

    [theme.breakpoints.up('xs')]:{
        textAlign:'center'
    },
    [theme.breakpoints.up('md')]:{
        textAlign:'inherit'
    },



}))

export const SaveAddressBox = styled(Box)(() => ({
    textAlign: 'center'
}))

export const AddNewButton = styled(Button)(() => ({
    color: '#EF7822',
    fontSize: '14px',
    fontWeight: '700',
    background: 'rgba(239, 120, 34, 0.1)',
    borderRadious: '5px'
}))
export const DeliveryDetailsGrid = styled(Grid)(() => ({
    background: '#FFFFFF',
    boxShadow: ' 0px 0px 10px rgba(0, 0, 0, 0.05)',
    borderRadius: '5px 5px 0px 0px',
    padding: '25px'
}))
export const CheckoutBox = styled(Box)(() => ({
    paddingTop: '30px',
    paddingBottom: '180px'
}))

export const OrderSummaryGrid = styled(Grid)(() => ({
    padding: '10px'
}))
export const PreferableTimeInput = styled(Autocomplete)(() => ({
    border: '1px solid rgba(251, 222, 201)',
    borderRadius: '10px'
}))
export const CouponGrid = styled(Grid)(() => ({
    background: '#FFFFFF',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
    borderRadius: '5px 5px 0px 0px',
    padding: '25px',
    marginTop: '10px',
    alignItems: 'center'

}))
export const CouponTitle = styled(Typography)(({theme}) => ({
    color: '#4B566B',
    fontWeight: '700',
    fontSize: '16px',
  [theme.breakpoints.up('xs')]:{
      textAlign:'center'
  },
  [theme.breakpoints.up('md')]:{
      textAlign:'inherit'
  },
}))


export const CouponButton = styled(Button)(({theme}) => ({
    background: '#EF7822',
    color: 'white',
    
    borderRadius: '5px',
    [theme.breakpoints.up('xs')]:{
        width:'122px',
        height:'37px'
    },
    [theme.breakpoints.up('md')]:{
        width: '162px',
    }

}))
export const InputField = styled(Paper)(() => ({
    border: '1px solid rgba(251, 222, 201)',

}))
export const PaymentOptionGrid = styled(Grid)(({theme}) => ({
    background: '#FFFFFF',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
    borderRadius: '5px 5px 0px 0px',
    padding: '25px',
    marginTop: '10px',
    [theme.breakpoints.up('xs')]:{
        textAlign:'center'
    },
    [theme.breakpoints.up('md')]:{
        textAlign:'inherit'
    },

}))
export const PymentTitle = styled(Typography)(({theme}) => ({
   textAlign:'center',
    fontSize: '16px',
    fontWeight: '700',
    color: '#414141',
    paddingBottom: '16px',

}))
export const ButtonGrid = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'space-between'
}))
export const CashOnButton = styled(Button)(() => ({
    background: 'rgba(45, 200, 88, 0.1)',
    width: '185px',
    height: '60px',
    borderRadious: '10px',
    gap: '5px',
    color: 'black'

}))
export const DigitalButton = styled(Button)(() => ({
    width: '185px',
    height: '60px',
    borderRadius: '10px',
    gap: '5px',
    color: 'black'
}))
export const WalletButton = styled(Button)(() => ({
    width: '185px',
    height: '60px',
    borderRadius: '10px',
    gap: '5px',
    color: 'black'
}))
export const ConditionTypography = styled(Typography)(() => ({
    color: '#9B9B9B',
    textAlign: 'center',
    fontSize: '16px',
    paddingTop: '15px',
    paddingBottom: '20px'
}))
export const PlaceOrderButton = styled(Button)(() => ({
    background: '#EF7822',
    borderRadius: '5px',
    border: '1px solid rgba(239, 120, 34, 0.3)',
    color: 'white',
    width: '100%'
}))
export const OrderSummary = styled(Typography)(() => ({
    textAlign: 'center',
    color: '#4B566B',
    fontSize: '18px',
    fontWeight: '700',
    paddingBottom: '30px'
}))
export const OrderFoodName = styled(Typography)(() => ({
    fontSize: '14px',
    color: '#414141',

}))
export const OrderFoodAmount = styled(Typography)(() => ({
    color: ' #EF7822',
    fontSize: '16px',
    fontWeight: '600'
}))
export const CalculationGrid = styled(Grid)(() => ({
    fontSize: '14px'
}))
export const TotalGrid = styled(Grid)(() => ({
    color: '#EF7822',
    fontSize: '16px',
    fontWeight: '600'
}))
