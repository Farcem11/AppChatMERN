import * as express from "express";
import { MessageService } from '../services/MessageService';
import { BaseController } from "./BaseController";

export class MessageController extends BaseController<MessageService>
{
    constructor(express : express.Application)
    {
        super(new MessageService(), express);
    }

    protected setRoutes() : void 
    {
        this.express.route('/message')
        .post((request, response) => 
        {
            this.service.addMessage(request, response);
        })
    }
}