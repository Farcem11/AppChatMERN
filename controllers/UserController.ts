import * as mongoose from 'mongoose';
import { UserSchema } from '../models/UserSchema';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserController
{
    public addNewUser(request : Request, response : Response)
    {
        let newUser = new User(request.body);

        newUser.save((error, user) =>
        {
            if(error) response.send(error);
            
            response.json(user);
        })
    }

    public getUsers(request : Request, response : Response)
    {
        User.find({}, (error, users) =>
        {
            if(error) response.send(error);
            
        response.json(users);
        })
    }

    public getUserById(request : Request, response : Response)
    {
        User.findById(request.params.userId, (error, user) =>
        {
            if(error) response.send(error);
            
            response.json(user);
        })
    }

    public updateUser(request : Request, response : Response)
    {
        const userId = request.params.userI;

        User.findOneAndUpdate({ _id : userId }, request.body, { new : true }, (error, user) =>
        {
            if(error) response.send(error);
            
            response.json(user);
        })
    }

    public deleteUser(request : Request, response : Response)
    {
        const userId = request.params.userI;

        User.remove({ _id : userId }, (error) =>
        {
            const message = { message: 'Successfully deleted contact!'};
            if(error) response.send(error);
            
            response.json(message);
        })
    }
}