import React from 'react';
import { Autocomplete, Box, Button, Divider, Grid, IconButton, InputBase, MenuItem, Paper, TextField, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import img from '../../../public/static/checkout/Rectangle 8221.png'
import cash from '../../../public/static/buttonImg/cashonbtn.png'
import digital from '../../../public/static/buttonImg/digitalbtn.png'
import wallet from '../../../public/static/buttonImg/walletbtn.png'
import {
    DeliveryTitle,
    DeliveryDetailsGrid,
    CheckoutBox,
    CouponGrid,
    PaymentOptionGrid,
    PymentTitle,
    CashOnButton,
    DigitalButton,
    WalletButton,
    ConditionTypography,
    PlaceOrderButton,
    OrderSummary,
    OrderFoodName,
    OrderFoodAmount,
    CalculationGrid,
    TotalGrid,
    DeliveryCaption,
    SaveAddressBox,
    AddNewButton,
    CouponTitle,
    CouponButton,
    InputField,
    OrderSummaryGrid,
    PreferableTimeInput,
    PrefarableCaption

} from './CheckOut.style';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const CheckoutPage = () => {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <CheckoutBox>
            <Grid container lg={12} md={12} xs={12} spacing={{ xs: 0, md: 3 }} >
                <DeliveryDetailsGrid item md={7} xs={12}>
                    <DeliveryTitle>DELIVERY DETAIlS</DeliveryTitle>

                    <FormControl>
                        <DeliveryCaption const id="demo-row-radio-buttons-group-label">Delivery Options</DeliveryCaption>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="home" control={<Radio />} label="Home delivery" />
                            <FormControlLabel value="take" control={<Radio />} label="Take away" />

                        </RadioGroup>
                    </FormControl>
                    <DeliveryCaption>Delivery Address</DeliveryCaption>
                    <InputField
                        variant="outlined"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Set Location"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <AddNewButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            Add New+
                        </AddNewButton>

                    </InputField>
                    <SaveAddressBox>
                        <Button>View Save Address</Button>
                    </SaveAddressBox>

                    <PrefarableCaption>Preferable Time</PrefarableCaption>
                    <Grid container item md={12} xs={12} spacing={{ xs: 1, md: 2 }}>
                        <Grid item md={6} xs={12}>
                            <PreferableTimeInput
                                disablePortal
                                id="combo-box-demo"
                                options={currencies}

                                renderInput={(params) => <TextField {...params} label="Today(27april)" />}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <PreferableTimeInput
                                disablePortal
                                id="combo-box-demo"
                                options={currencies}

                                renderInput={(params) => <TextField {...params} label="Now" />}
                            />
                        </Grid>

                    </Grid>



                </DeliveryDetailsGrid>

                <OrderSummaryGrid container item md={5} xs={12}>
                    <Grid item md={12} xs={12}>
                        <OrderSummary variant="h4">Order Summery</OrderSummary>
                    </Grid>
                    <Grid container md={12} xs={12} spacing={{ xs: 1 }}>
                        <Grid item md={2.5} xs={2.5}>
                            <img
                                src={img.src}
                                loading="lazy"
                            />
                        </Grid>
                        <Grid item md={9.5} xs={9.5}>
                            <OrderFoodName>Peporoni Pizza With Japanese Japaeno and Olive...</ OrderFoodName>
                            <OrderFoodName>Qty:2</OrderFoodName>
                            <OrderFoodAmount>$ 34.00</OrderFoodAmount>
                        </Grid>
                        <Grid item md={2.5} xs={2.5}>
                            <img
                                src={img.src}
                                loading="lazy"
                            />
                        </Grid>
                        <Grid item md={9.5} xs={9.5}>
                            < OrderFoodName>Peporoni Pizza With Japanese Japaeno and Olive...</ OrderFoodName>
                            <OrderFoodName>Qty:2</OrderFoodName>
                            <OrderFoodAmount>$ 34.00</OrderFoodAmount>

                        </Grid>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Divider />
                    </Grid>



                    <CalculationGrid container item md={12} xs={12} spacing={1}>
                        <Grid item md={8} xs={8}>
                            Subtotal
                        </Grid>
                        <Grid item md={4} xs={4}>
                            $12
                        </Grid>
                        <Grid item md={8} xs={8}>
                            Discount
                        </Grid>
                        <Grid item md={4} xs={4}>
                            $22
                        </Grid>
                        <Grid item md={8} xs={8}>
                            Cupon Discount
                        </Grid>
                        <Grid item md={4} xs={4}>
                            $23
                        </Grid>
                        <Grid item md={8} xs={8}>
                            VAT(50%)
                        </Grid>
                        <Grid item md={4} xs={4}>
                            $23
                        </Grid>
                        <Grid item md={8} xs={8}>
                            Delivery fee
                        </Grid>
                        <Grid item md={4} xs={4}>
                            $22
                        </Grid>
                    </CalculationGrid>
                    <Grid item md={12} xs={12}>
                        <Divider />
                    </Grid>
                    <TotalGrid container md={12} xs={12}>
                        <Grid item md={8} xs={8}>
                            Total
                        </Grid>
                        <Grid item md={4} xs={4}>
                            $142
                        </Grid>
                    </TotalGrid>
                </OrderSummaryGrid>

                <CouponGrid container md={7} spacing={{xs:1}}>
                    <Grid item md={2} xs={12}>
                        <CouponTitle>Have a Cupon?</CouponTitle>
                    </Grid>
                    <Grid item md={5} xs={6}>

                        <InputField variant="outlined">
                            <InputBase
                            placeholder="Enter Your Coupon.."
                                sx={{ ml: 1, flex: 1 }}
                            />

                        </InputField>
                    </Grid>
                    <Grid item md={5} xs={6}>
                        <CouponButton>Apply Now</CouponButton>
                    </Grid>

                </CouponGrid>

                <Grid container md={7}>

                    <PaymentOptionGrid container md={12} xs={12}>
                        <Grid item md={12}>
                            <PymentTitle>Payment Options</PymentTitle>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <CashOnButton> <img src={cash.src} alt="" /> Cash on delivery</CashOnButton>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <DigitalButton> <img src={digital.src} alt="" /> Digital payment</DigitalButton>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <WalletButton> <img src={wallet.src} alt="" /> Wallet payment</WalletButton>
                        </Grid>
                    </PaymentOptionGrid>

                    <Grid item md={12} xs={12}>
                        <ConditionTypography>I agree that placing the order places me under Terms and Conditions & Privacy Policies</ConditionTypography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <PlaceOrderButton>Place holder</PlaceOrderButton>

                    </Grid>
                </Grid>
            </Grid>
        </CheckoutBox>
    );
};

export default CheckoutPage;