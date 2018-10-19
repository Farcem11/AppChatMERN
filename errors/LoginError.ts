export default class LoginError extends Error
{
    constructor(message: string) 
    {
        super(message);
        Object.setPrototypeOf(this, LoginError.prototype);
        
        this.message = message;
        this.name = "Login error";
    }
}