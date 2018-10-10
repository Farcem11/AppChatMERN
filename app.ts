import * as express from "express";
import * as bodyParser from "body-parser";
import { Route } from './Route/Route';

class App 
{
    public app : express.Application;
    public Route : Route;

    constructor() 
    {
        this.app = express();
        this.config();
        this.Route = new Route(this.app);
    }

    private config() : void
    {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;