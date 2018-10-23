import * as express from "express"
import * as bodyParser from "body-parser"
import * as path from 'path'
import { UserController } from './controllers/UserController'
import { MessageController } from './controllers/MessageController'
import * as PropertiesReader from 'properties-reader'
import * as mongoose from 'mongoose'
import { createServer, Server } from 'http';
import * as socketIo from 'socket.io';

var properties = PropertiesReader('./database/database.properties');

class App
{
    public express : express.Application;
    public server: Server;
    public io: SocketIO.Server;
    private mongoUrl : string;

    constructor()
    {
        this.mongoUrl = properties.get('DB_URL') as string;
        this.express = express();
        this.server = createServer(this.express);
        this.io = socketIo(this.server);
        this.configSetup();
        this.controllersSetup();
        this.databaseSetup();
    }

    private controllersSetup() : void
    {
        new UserController(this.express);
        new MessageController(this.express);
    }

    private configSetup() : void
    {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));

        // Serve the static files from the React app
        this.express.use(express.static(path.join(__dirname, 'client/build')));

        // Handles any requests that don't match the ones above
        this.express.get('*', (req,res) =>
        {
            res.sendFile(path.join(__dirname + '/client/build/index.html'));
        });
    }

    private databaseSetup(): void
    {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}

export default new App();