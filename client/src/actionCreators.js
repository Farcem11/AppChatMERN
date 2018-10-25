import axios from "axios";

import * as ActionTypes from './constants/ActionTypes';
import * as AlertTypes from './constants/AlertTypes';

const login = (request) =>
{
    return dispatch => 
    {
        return axios.post('/login', request)
        .then(response => 
        {
            dispatch(
            {
                type : ActionTypes.LOGIN,
                user : 
                {
                    data : response.data,
                    isAuthenticated : true
                },
                alert : 
                {
                    name : 'Hi ' + response.data.FirstName,
                    message : 'Welcome back!',
                    type : AlertTypes.SUCCESS
                }
            });
        })
        .catch(error => 
        {
            dispatch(
            {
                type : ActionTypes.SET_ALERT,
                alert : 
                {
                    name : error.response.data.message,
                    message : 'Please check your input',
                    type : AlertTypes.WARNING
                }
            })
        })
    };
}

const logout = () =>
{
    return {
        type : ActionTypes.LOGOUT,
        user :
        {
            data : null,
            isAuthenticated : false
        },
        alert : 
        {
            name : 'Bye, see you soon!',
            message : 'You have log out',
            type : AlertTypes.INFO
        }
    }
}

const register = (user) =>
{
    return dispatch =>
    {
        return axios.post('/user', user)
        .then(response =>
        {
            dispatch(
            {
                type : ActionTypes.REGISTER,
                user :
                {
                    data : response.data,
                    isAuthenticated : true
                },
                alert : 
                {
                    name : 'Hi ' + user.FirstName,
                    message : 'Your sign up was successful!',
                    type : AlertTypes.SUCCESS
                }
            }) 
        })
        .catch(error =>
        {
            dispatch(
            {
                type : ActionTypes.SET_ALERT,
                alert : 
                {
                    name : error.response.data.name,
                    message : error.response.data.message,
                    type : AlertTypes.WARNING
                }
            })
        })
    }
}

const sendMessage = (messages) =>
{
    return {
        type : ActionTypes.SEND_MESSAGE,
        messages
    }
}

export { login, logout, register, sendMessage }