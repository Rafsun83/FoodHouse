import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Resturant from '../../../public/static/Resturantimage/Rectangle 8240.png'
import { Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { connect } from 'formik';

const AllShowresturant = (props) => {
    const {name, rating} = props.allRes
    console.log("datapas",  props.allRes)
   
    return (
        <Box sx={{ textAlign: 'center' }}>
            <img className='resturant__img' src={Resturant.src} alt="" />
            <Box>
                <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '22px' }} >{name}</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: '700', lineHeight: '16px', color: '#4B566B' }} >{rating}<StarIcon sx={{ width: '16px', color: 'orange' }} /></      Typography>
            </Box>     
        </Box>
    );
};
AllShowresturant.PropTypes = {
    allRes: PropTypes.shape({
        name: PropTypes.number
    })
}
export default AllShowresturant;