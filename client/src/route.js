import React from 'react';

const SignUp = React.lazy(() => import('./App/components/Authentication/SignUp/SignUp'));
const SignIn = React.lazy(() => import('./App/components/Authentication/SignIn/SignIn'));

const route = [
    { path: '/register', exact: true, name: 'Signup ', component: SignUp },
    { path: '/login', exact: true, name: 'Signin ', component: SignIn }
];

export default route;