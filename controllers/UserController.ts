import * as mongoose from 'mongoose';
import { UserSchema } from '../models/UserSchema';
import { Request, Response } from 'express';
import * as sha256 from 'sha256';

const User = mongoose.model('User', UserSchema);

export class UserController
{
    public addNewUser(request : Request, response : Response)
    {
        request.body.Password = sha256(request.body.Password);
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

    public getUser(request : Request, response : Response)
    {
        const password = sha256(request.body.password);
        User.findOne( 
            { $and :
                [ 
                    { $or :
                        [ 
                            { Email : request.body.name },
                            { UserName : request.body.name }
                        ]
                    },
                    { Password : password } 
                ] 
            }, (error, user) =>
        {
            if(error) response.send(error);
            
            response.json(user);
        })
    }

    public updateUser(request : Request, response : Response)
    {
        const userId = request.params.userId;

        User.findOneAndUpdate({ _id : userId }, request.body, { new : true }, (error, user) =>
        {
            if(error) response.send(error);
            
            response.json(user);
        })
    }

    public deleteUser(request : Request, response : Response)
    {
        const userId = request.params.userId;

        User.remove({ _id : userId }, (error) =>
        {
            if(error) response.send(error);
            
            response.json({ deleted : true });
        })
    }
}