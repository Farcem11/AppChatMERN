import * as InitialStateProperties from './InitialStateProperties';

const USER = 
{ 
    data : InitialStateProperties.OBJECT, 
    isAuthenticated : InitialStateProperties.BOOLEAN 
}

const ALERT = 
{ 
    name : InitialStateProperties.STRING, 
    message : InitialStateProperties.STRING, 
    type : InitialStateProperties.STRING
}

export { USER, ALERT }