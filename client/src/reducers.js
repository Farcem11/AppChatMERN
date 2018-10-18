import * as ActionTypes from './constants/ActionTypes';

const user = (user = { data : null, isAuthenticated : false }, action) =>
{
    if(action.type === ActionTypes.LOGIN)
    {
        return action.user;
    }
    else if(action.type === ActionTypes.LOGOUT)
    {
        return action.user;
    }
    else if(action.type === ActionTypes.REGISTER)
    {
        return action.user;
    }
    return user;
};

export { user }