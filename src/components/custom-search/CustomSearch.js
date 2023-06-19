import React from 'react'
import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from './CustomSearch.style'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'

const CustomSearch = (props) => {
    const { t } = useTranslation()
    return (
        <Box>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon fontSize="small" />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder={t('Search')}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </Box>
    )
}

CustomSearch.propTypes = {}

export default CustomSearch
