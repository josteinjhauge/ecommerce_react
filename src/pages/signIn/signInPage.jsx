import React from 'react';
import './signInPage.scss';
import SingIn from '../../components/sign-in/signInComponent';
import SignUp from '../../components/sign-up/sign-up';


const SignInPage = () => (
    <div className='sign-in-and-sign-up'>
        <SingIn />
        <SignUp />
    </div>
);

export default SignInPage;