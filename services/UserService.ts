import { User } from '../models/User'
import { Request, Response } from 'express'
import * as sha256 from 'sha256'
import LoginError from '../errors/LoginError'
import { BaseService } from './BaseService';

export class UserService extends BaseService
{
    public async addNewUser(request : Request, response : Response)
    {
        request.body.Password = sha256(request.body.Password);
        let newUser = new User(request.body);

        try
        {
            const user = await newUser.save()
            response.json(user);
        }
        catch({ name, message })
        {
            response.status(this.errorStatus).send({ name, message });
        }
    }

    public async getUsers(request : Request, response : Response)
    {
        try
        {
            const users = await User.find({});
            response.json(users);
        }
        catch({ name, message })
        {
            response.status(this.errorStatus).send({ name, message });
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
            })
            .select('-Password -CreatedDate -__v');
            
            if(user === null)
            {
                throw new LoginError("You have entered an invalid username / email or password");
            }
            response.json(user);
        }
        catch({ name, message })
        {
            response.status(this.errorStatus).send({ name, message });
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
        catch({ name, message }) 
        {
            response.status(this.errorStatus).send({ name, message });
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
        catch({ name, message }) 
        {
            response.status(this.errorStatus).send({ name, message });  
        }
    }
}