import React from 'react'
import { CustomIconButton } from '../../styled-components/CustomButtons.style'
import { CustomAvatarMedium } from './CustomAvatar.style'

const CustomAvatar = (props) => {
    const { avatarImage } = props
    return (
        <CustomIconButton size="large" color="inherit">
            <CustomAvatarMedium alt="Remy Sharp" src={avatarImage} />
        </CustomIconButton>
    )
}

CustomAvatar.propTypes = {}

export default CustomAvatar
