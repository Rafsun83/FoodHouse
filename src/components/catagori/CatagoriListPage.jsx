import { Box, Grid, IconButton, InputBase, Pagination, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';
import SearchIcon from '@mui/icons-material/Search'
import CatagoriList from './CatagoriList';

const CatagoriListPage = () => {
    const orangeColor = '#EF7822'
    return (
        <Box>
            <Grid item container md={12} lg={12} xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Grid item md={12} lg={12} xs={12} sx={{ padding: '10px 0px', background: '#F3F5F9' }}>
                    <Typography sx={{ textAlign: 'center', color: ' #4B566B' }}>Search result for <span style={{ color: '#EF7822' }}>"Asian food"</span> 25 food found </Typography>
                </Grid>
            </Grid>

            <Grid container item md={12} lg={12} xs={12} spacing={{ xs: 2, md: 3 }} sx={{ padding: '20px 0px' }}>
                <Grid item md={4} xs={12} >
                    {/* <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        className='toggle__btn'
                    >
                        <ToggleButton className='tggle__btn0' value="web">Veg</ToggleButton>
                        <ToggleButton className='tggle__btn1' value="android">Non-Veg</ToggleButton>

                    </ToggleButtonGroup>
                    <Typography variant='h4' sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center', paddingTop: '15px', color: ' #4B566B' }}>We found <span style={{ color: '#EF7822' }}>25</span> resturantsfor you</Typography> */}
                </Grid>
                <Grid item md={4} xs={12}>
                    <Paper
                        variant="outlined"
                        className="navsearch"
                        sx={{
                            borderColor: orangeColor,
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: '50%',
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search resturant here..."
                            inputProps={{
                                'aria-label': 'search google maps',
                            }}
                        />
                        <IconButton
                            type="submit"
                            sx={{ p: '10px', color: orangeColor }}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Grid item container md={12} lg={12} xs={12}>
                        <Grid item md={6} xs={6} >
                            <Dropdown >
                                <Dropdown.Toggle style={{ background: 'none', border: '1px solid #FFEBDD', color: '#4B566B' }} variant="success" id="dropdown-basic">
                                    <GridViewOutlinedIcon />  Sort Grid: 20
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid>
                        <Grid item md={6} xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Dropdown >
                                <Dropdown.Toggle style={{ background: 'none', border: '1px solid #FFEBDD', color: '#4B566B' }} variant="success" id="dropdown-basic">
                                    <AddRoadOutlinedIcon />  Sort by: Default
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container item md={12} xs={12} spacing={2}>
                <Grid item md={2} sm={3} xs={6}>
                    <CatagoriList />
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                    <CatagoriList />
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                    <CatagoriList />
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                    <CatagoriList />
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                    <CatagoriList />
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                    <CatagoriList />
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                    <CatagoriList />
                </Grid>
                <Grid item md={2} sm={3} xs={6}>
                    <CatagoriList />
                </Grid>

            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '30px 0px 70px 0px' }}>
                <Stack spacing={2} >
                    <Pagination count={10} />
                </Stack>
            </Box>
        </Box>
    );
};

export default CatagoriListPage;