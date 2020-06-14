import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sing-up/sign-up.component';

import {SignInAndSingUpContainer} from './sing-in-and-sing-up.styles';

const SignInAndSignUpPage = () => (
    <SignInAndSingUpContainer>
    <SignIn />
    <SignUp />
    </SignInAndSingUpContainer>
)

export default SignInAndSignUpPage;