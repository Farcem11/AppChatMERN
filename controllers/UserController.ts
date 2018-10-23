import * as express from "express";
import { UserService } from '../services/UserService';
import { BaseController } from "./BaseController";

export class UserController extends BaseController<UserService>
{
    constructor(express : express.Application)
    {
        super(new UserService(), express);
    }

    protected setRoutes() : void 
    {
        this.express.route('/user')
        .post((request, response) => 
        {
            this.service.addNewUser(request, response);
        })
        .get((request, response) => 
        {
            this.service.getUsers(request, response);
        })

        this.express.route('/user/:userId')
        .put((request, response) => 
        {
            this.service.updateUser(request, response);
        })
        .delete((request, response) => 
        {
            this.service.deleteUser(request, response);
        })

        this.express.route('/login')
        .post((request, response) =>
        {
            this.service.getUser(request, response);
        })
    }
}