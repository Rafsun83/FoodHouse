import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import img from '../../../public/static/Privacy/Rectangle 8288.png'

const ConditionPage = () => {
    return (
        <Box>
            <Grid container item md={12} xs={12} spacing={3}>
                <Grid item md={12} xs={12}>



                    <img
                        src={img.src}

                        alt=""
                        loading="lazy"
                    />


                </Grid>
                <Grid item md={12} xs={12} sx={{ paddingBottom: '50px' }}>
                    <Box>
                        <Typography variant='h2' sx={{ padding: '10px 0px 10px 0px' }}>This is s Demo Privacy Policy</Typography>
                        <Typography>
                            This policy explains how StackFood website and related applications (the “Site”, “we” or “us”) collects, uses, shares and protects the personal information that we collect through this site or different channels. StackFood has established the site to link up the users who need foods or grocery items to be shipped or delivered by the riders from the affiliated restaurants or shops to the desired location. This policy also applies to any mobile applications that we develop for use with our services on the Site, and references to this “Site”, “we” or “us” is intended to also include these mobile applications. Please read below to learn more about our information policies. By using this Site, you agree to these policies.
                        </Typography>
                        <Typography variant='h2' sx={{ padding: '10px 0px 10px 0px' }}>  How the Information is collected</Typography>
                        <Typography>


                            Information provided by web browser
                            You have to provide us with personal information like your name, contact no, mailing address and email id, our app will also fetch your location information in order to give you the best service. Like many other websites, we may record information that your web browser routinely shares, such as your browser type, browser language, software and hardware attributes, the date and time of your visit, the web page from which you came, your Internet Protocol address and the geographic location associated with that address, the pages on this Site that you visit and the time you spent on those pages. This will generally be anonymous data that we collect on an aggregate basis.
                        </Typography>
                        <Typography variant='h2' sx={{ padding: '10px 0px 10px 0px' }}> Personal Information that you provide</Typography>
                        <Typography>
                            If you want to use our service, you must create an account on our Site. To establish your account, we will ask for personally identifiable information that can be used to contact or identify you, which may include your name, phone number, and e-mail address. We may also collect demographic information about you, such as your zip code, and allow you to submit additional information that will be part of your profile. Other than basic information that we need to establish your account, it will be up to you to decide how much information to share as part of your profile. We encourage you to think carefully about the information that you share and we recommend that you guard your identity and your sensitive information. Of course, you can review and revise your profile at any time.
                        </Typography>
                        <Typography variant='h2' sx={{ padding: '10px 0px 10px 0px' }}> Payment Information</Typography>
                        <Typography>

                            To make the payment online for availing our services, you have to provide the bank account, mobile financial service (MFS), debit card, credit card information to the StackFood platform.
                        </Typography>
                        <Typography variant='h2' sx={{ padding: '10px 0px 10px 0px' }}> Advertising Cookies</Typography>
                        <Typography>
                            We may use third parties, such as Google, to serve ads about our website over the internet. These third parties may use cookies to identify ads that may be relevant to your interest (for example, based on your recent visit to our website), to limit the number of times that you see an ad, and to measure the effectiveness of the ads.
                        </Typography>
                        <Typography variant='h2' sx={{ padding: '10px 0px 10px 0px' }}> Google Analytics</Typography>
                        <Typography>
                            We may also use Google Analytics or a similar service to gather statistical information about the visitors to this Site and how they use the Site. This, also, is done on an anonymous basis. We will not try to associate anonymous data with your personally identifiable data. If you would like to learn more about Google Analytics, please click here.
                        </Typography>
                    </Box>
                </Grid>

            </Grid>

        </Box >
    );
};

export default ConditionPage;