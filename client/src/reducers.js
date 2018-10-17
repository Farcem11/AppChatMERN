import * as ActionTypes from './constants/ActionTypes';

const user = (user = null, action) =>
{
    if(action.type === ActionTypes.LOGIN)
    {
        return action.user;
    }
    else if(action.type === ActionTypes.LOGOUT)
    {
        return action.user;
    }
    return user;
};

export { user }