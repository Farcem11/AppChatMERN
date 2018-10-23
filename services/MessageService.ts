import { Message } from '../models/Message'
import { Request, Response } from 'express'
import { BaseService } from './BaseService';

export class MessageService extends BaseService
{
    public async addMessage(request : Request, response : Response)
    {
        try
        {
            let newMessage = new Message(request.body);
            const message = await newMessage.save();
    
            response.json(message);
        }
        catch({ name, message })
        {
            response.status(this.errorStatus).send({ name, message });
        }
    }
}