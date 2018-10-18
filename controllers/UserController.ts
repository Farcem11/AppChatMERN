import * as mongoose from 'mongoose';
import { UserSchema } from '../models/UserSchema';
import { Request, Response } from 'express';
import * as sha256 from 'sha256';

const User = mongoose.model('User', UserSchema);

export class UserController
{
    private errorStatus : number;

    constructor()
    {
        this.errorStatus = 400;
    }

    public async addNewUser(request : Request, response : Response)
    {
        request.body.Password = sha256(request.body.Password);
        let newUser = new User(request.body);

        try
        {
            const user = await newUser.save()
            response.json(user);
        }
        catch(error)
        {
            response.status(this.errorStatus).send(error);
        }
    }

    public async getUsers(request : Request, response : Response)
    {
        try
        {
            const users = await User.find({});
            response.json(users);
        }
        catch(error)
        {
            response.status(this.errorStatus).send(error);
        }
    }

    public async getUser(request : Request, response : Response)
    {
        const password = sha256(request.body.Password);
        try
        {
            const user = await User.findOne( 
            { 
                $and :
                [ 
                    { 
                        $or :
                        [
                            { Email : request.body.Name },
                            { UserName : request.body.Name }
                        ]
                    },
                    { Password : password } 
                ] 
            });
            response.json(user);
        }
        catch(error)
        {
            response.status(this.errorStatus).send(error);
        }
    }

    public async updateUser(request : Request, response : Response)
    {
        const userId = request.params.userId;

        try 
        {
            const user = await User.findOneAndUpdate({ _id : userId }, request.body, { new : true });   
            response.json(user);
        } 
        catch(error) 
        {
            response.status(this.errorStatus).send(error);
        }
    }

    public async deleteUser(request : Request, response : Response)
    {
        const userId = request.params.userId;

        try 
        {
            const res = User.remove({ _id : userId });
            response.json(res);            
        } 
        catch(error) 
        {
            response.status(this.errorStatus).send(error);  
        }
    }
}