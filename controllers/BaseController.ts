import * as express from 'express'

export abstract class BaseController<T>
{
    protected express : express.Application;
    protected service : T;

    constructor(service : T, express : express.Application)
    {
        this.express = express;
        this.service = service
        this.setRoutes();
    }

    protected abstract setRoutes() : void 
}