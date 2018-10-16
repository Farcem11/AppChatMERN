import axios from "axios";

import * as ActionTypes from './constants/ActionTypes';

const login = ({name, password}) =>
{
    const request = 
    {
        'name' : name,
        'password' : password
    };

    return dispatch => 
    {
        return axios.post('/login', request)
        .then(response => 
        {
            dispatch(
            {
                type : ActionTypes.LOGIN,
                user : response.data
            });
        })
    };
}

export { login }