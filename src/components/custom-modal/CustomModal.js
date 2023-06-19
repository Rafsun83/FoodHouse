import React from 'react'
import { Modal, useMediaQuery, useTheme } from '@mui/material'
import { CustomModalWrapper } from './CustomModal.style'

const CustomModal = ({ children }) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    const handleClose = () => {}
    return (
        <div>
            <Modal
                open={false}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableAutoFocus={true}
            >
                <CustomModalWrapper>{children}</CustomModalWrapper>
            </Modal>
        </div>
    )
}
CustomModal.propTypes = {}

export default CustomModal
