export class BaseService
{
    protected errorStatus : number;

    constructor()
    {
        this.errorStatus = 400;
    }
}