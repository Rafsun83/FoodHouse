import React from 'react';
import { Button, InputBase, Paper, Stack, styled, Typography } from '@mui/material';

const LetsConnect = () => {
    const StyledButton = styled(Button)(({ theme }) => ({
        color: '#fff',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: '#2287FD',
        '&:hover': {
            backgroundColor: '#216ec5',
        },
    }));
    return (
        <>
            <Stack direction={'column'} className="lets-connect-wrap">
                <Typography variant='h6' className='title font-signika-negative'>Lets Connect !</Typography>
                <Typography className='subtitle font-signika-negative'>Stay upto date with restaurants and foods around you</Typography>
                <Paper
                    // variant="outlined"
                    className="lets-connect-paper"
                    elevation={0}
                    sx={{ mt: 1, p: '0', display: 'flex', alignItems: 'center', width: '100%', maxWidth: '350px', backgroundColor: '#484F5E' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, backgroundColor: '#484F5E', color: '#DDE3EA' }}
                        placeholder="Your Email Address"
                        inputProps={{ 'aria-label': 'Your Email Address' }}
                    />
                    <StyledButton type="submit" aria-label="search">
                        Join
                    </StyledButton>
                </Paper>
            </Stack>
        </>
    )
}

export default LetsConnect