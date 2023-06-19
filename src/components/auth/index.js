import { Modal } from '@mui/material';
import React, { useState } from 'react';
import SignInPage from './sign-in';
import SignUpPage from './sign-up';

const AuthModal = ({ open, handleClose }) => {
    const [signInPage, setSignInPage] = useState(true)
    const [signUpPage, setSignUpPage] = useState(false)
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* {signInPage && */}
                {
                    signInPage ? <SignInPage setSignInPage={setSignInPage}/> : <SignUpPage setSignInPage={setSignInPage}/>
                }
                
                  
                {/* }
                {
                    signUpPage &&
                    <SignUpPage/>
                } */}
               
            </Modal>
        </div>
    );
};

export default AuthModal;