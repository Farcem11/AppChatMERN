import * as express from "express";
import * as bodyParser from "body-parser";
import { UserRoute } from './routes/UserRoute';
import * as PropertiesReader from 'properties-reader';
import * as mongoose from "mongoose";

var properties = PropertiesReader('./database/database.properties');

class App 
{
    public app : express.Application;
    public userRoute : UserRoute;
    public mongoUrl : String;

    constructor()
    {
        this.app = express();
        this.config();
        this.userRoute = new UserRoute(this.app);
        this.mongoSetup();
    }

    private config() : void
    {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void
    {
        this.mongoUrl = properties.get('DB_URL') + properties.get('DB_NAME');
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}

export default new App().app;