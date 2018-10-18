import axios from "axios";

import * as ActionTypes from './constants/ActionTypes';

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
                }
            });
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
                }
            }) 
        })
        .catch(error =>
        {
            console.log(error);
        })
    }
}

export { login, logout, register }