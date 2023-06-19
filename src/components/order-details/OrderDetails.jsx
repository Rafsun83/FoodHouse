import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import img from '../../../public/static/order/Rectangle 8233 (3).png'
import StarIcon from '@mui/icons-material/Star';
import {
    OrderDetailGrid,
    OrderDetailBox,
    OrderNumberGrid,
    OrderStatusGrid,
    OrderSummaryGrid,
    OrderSummary,
    OrderFoodName,
    OrderFoodAmount,
    CalculationGrid,
    TotalGrid,
    IformationGrid,
    OrderStatusBox,
    TitleTypography,
    HeadingBox,
    InfoTypography

} from './OrderDetail.style';

const OrderDetails = () => {
    return (
        <OrderDetailBox>
            <OrderDetailGrid container item md={12} lg={12} xs={12} >
                <OrderNumberGrid item md={12} xs={12}>
                    <HeadingBox>
                        <Typography sx={{ color: '#EF7822', fontSize: '36px', fontWeight: '600' }}>Order#156222</Typography>
                        <Typography>Order placed: 15 April, 2022, 4:30pm</Typography>
                    </HeadingBox>
                    <Divider />
                </OrderNumberGrid>
                <Grid item md={7} >
                    <OrderStatusBox>
                        <OrderStatusGrid container md={12} xs={12}>
                            <Grid item md={12} xs={12}>
                                <TitleTypography >Order Status</TitleTypography>
                            </Grid>
                            <Grid item md={5} xs={12}>
                                <Typography sx={{ fontWeight: '600' }} >Pyment method</Typography>
                                <Typography sx={{ fontWeight: '700', color: '#EF7822' }}>Digitaly paid</Typography>
                                <Typography sx={{ fontWeight: '500' }}>Amount: $14.66</Typography>

                            </Grid>
                            <Grid item md={7} xs={12}>
                                <Typography sx={{ fontWeight: '500' }}>Order Status: <span style={{ color: 'rgba(120,231,238)' }}>Pending</span> </Typography>
                                <Typography sx={{ fontWeight: '500' }}>PaymentStatus: <span style={{ color: 'rgba(166,224,191)' }}>Paid</span></Typography>

                            </Grid>
                        </OrderStatusGrid>
                    </OrderStatusBox>

                    <Box>
                        <IformationGrid container md={12} xs={12} columnSpacing={{ xs: 1 }}>
                            <Grid item md={12} xs={12}>
                                <TitleTypography >Resturant Informations</TitleTypography>
                            </Grid>
                            <Grid item md={2.5} xs={3}>
                                <img
                                    src={img.src}
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item md={9.5} xs={9}>
                                <InfoTypography>Tasty Lunch</InfoTypography>
                                <InfoTypography sx={{ fontWeight: 'bold' }}>5.5 <StarIcon sx={{ fontSize: '16px', color: '#EF7822' }} /> </InfoTypography>
                                <InfoTypography>Address: House:00, Road:00, Streed:00</InfoTypography>
                            </Grid>
                        </IformationGrid>
                    </Box>
                </Grid>
                <OrderSummaryGrid item md={5} xs={12}>
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

            </OrderDetailGrid>
        </OrderDetailBox>
    );
};

export default OrderDetails;