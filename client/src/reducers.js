import * as ActionTypes from './constants/ActionTypes';

const user = (user = {}, action) =>
{
    if(action.type === ActionTypes.LOGIN)
    {
        return action.user;
    }
    return user;
};

export { user }