import * as ActionTypes from './constants/ActionTypes';
import * as InitialStates from './constants/InitialStates';

const user = (user = InitialStates.USER, action) =>
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

const alert = (alert = InitialStates.ALERT, action) =>
{
    if(action.type === ActionTypes.SET_ALERT)
    {
        return action.alert;
    }
    else if(action.type === ActionTypes.REGISTER)
    {
        return action.alert;
    }
    else if(action.type === ActionTypes.LOGIN)
    {
        return action.alert;
    }
    else if(action.type === ActionTypes.LOGOUT)
    {
        return action.alert;
    }
    return alert;
}

export { user, alert }