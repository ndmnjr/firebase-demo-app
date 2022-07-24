import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Button,
    ErrorMessage,
    Heading,
    Modal,
    TextInput,
} from '../ui';
import {signIn} from './signIn';
import { ResetPasswordForm } from './ResetPasswordForm';

const Form = styled.div`
    width: 350px;
    margin: 32px;
`;

const FullWidthTextInput = styled(TextInput)`
    display: block;
    width: 100%;
`;

const FullWidthButton = styled(Button)`
    display: block;
    width: 100%;
`;

const CreateAccountButton = styled(FullWidthButton)`
    position: relative;
    top: 104px;
    margin-top: -64px;
`;

const withTopMargin = px => ({ marginTop: `${px}px` });

/*
    This component contains the contents that are shown
    inside the box of the Sign-In Page - email address, password, etc.
*/
export const SignInForm = (props) => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);



    const onSignInClicked = async () => {
        // Firebase code goes here
        try {
            const res = await signIn(emailValue, passwordValue);
            if(res) {
                props.history.push('/');
            }
        } catch(e) {
            setErrorMessage(e.message);
        }
        
    }

    const onSignInWithGoogleClicked = async () => {
        // Firebase code goes here
    }

    return (
        <Form>
            <Heading>My Reservations App</Heading>
            {errorMessage && <ErrorMessage style={{
                    marginBottom: '16px',
                }}>
                    {errorMessage}
                </ErrorMessage>}
            <FullWidthTextInput
                name='email'
                value={emailValue}
                placeholder='someone@gmail.com'
                onChange={e => setEmailValue(e.target.value)} />
            <FullWidthTextInput
                name='password'
                type='password'
                value={passwordValue}
                placeholder='Password'
                style={withTopMargin(8)}
                onChange={e => setPasswordValue(e.target.value)} />
            <FullWidthButton
                type='transparent'
                style={withTopMargin(8)}
                onClick={() => setShowModal(true)}
            >Forgot your password?</FullWidthButton>
            <FullWidthButton
                disabled={!emailValue || !passwordValue}
                style={withTopMargin(8)}
                onClick={onSignInClicked}
            >Sign In</FullWidthButton>
            <FullWidthButton
                style={withTopMargin(8)}
                onClick={onSignInWithGoogleClicked}
            >Sign In With Google</FullWidthButton>
            <CreateAccountButton
                type='transparent'
                onClick={() => props.history.push('/create-account')}
            >Create an account</CreateAccountButton>
            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <ResetPasswordForm onClose={() => setShowModal(false)} />
            </Modal>
        </Form>
    );
}