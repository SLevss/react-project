import React from 'react';
import { authActions } from "../redux/authSlice";
import {useDispatch} from 'react-redux'
import { Input } from './Input';

type Props = {
    loginValidation: (userName: string) => boolean
}

export const Login: React.FC<Props> = (props)=>{
    
    const [userName, setUserName] = React.useState('');
    const dispatch = useDispatch();
    function getUserName(value: string): string {
        if(props.loginValidation(value)) {
            setUserName(value);
        }
        return '';
    }
    return <div>
        <Input placeHolder={'Enter valid user name'} inputProcess={getUserName} ></Input>
        <p>user name: {userName}</p>
        <button onClick={ () => dispatch(authActions.login(userName)) }>Login</button>
    </div>
}