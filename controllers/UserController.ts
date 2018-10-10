import * as mongoose from 'mongoose';
import { UserSchema } from '../models/UserSchema';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserController
{
    private responseHandler(error, response, data)
    {
        if(error) response.send(error);
            
        response.json(data);
    }

    public addNewUser(request : Request, response : Response)
    {
        let newUser = new User(request.body);

        newUser.save((error, user) =>
        {
            this.responseHandler(response, error, user);
        })
    }

    public getUsers(request : Request, response : Response)
    {
        User.find({}, (error, users) =>
        {
            this.responseHandler(response, error, users);
        })
    }

    public getUserById(request : Request, response : Response)
    {
        User.findById(request.params.userId, (error, user) =>
        {
            this.responseHandler(response, error, user);
        })
    }

    public updateUser(request : Request, response : Response)
    {
        const userId = request.params.userI;

        User.findOneAndUpdate({ _id : userId }, request.body, { new : true }, (error, user) =>
        {
            this.responseHandler(response, error, user);
        })
    }

    public deleteUser(request : Request, response : Response)
    {
        const userId = request.params.userI;

        User.remove({ _id : userId }, (error) =>
        {
            const data = { message: 'Successfully deleted contact!'};
            this.responseHandler(response, error, data);
        })
    }
}