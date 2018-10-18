import { Response, Request } from 'express';
import * as express from "express";
import { UserController } from '../controllers/UserController';

export class UserRoute
{
    private app : express.Application;
    private userController : UserController;

    constructor(app : express.Application)
    {
        this.app = app;
        this.userController = new UserController()
        this.setUserRoutes();
    }

    private setUserRoutes() : void 
    {
        this.app.route('/')
        .get((request, response) => 
        {
            response.json({message : "Get request"})
        });

        this.app.route('/user')
        .post((request, response) => 
        {
            this.userController.addNewUser(request, response);
        })
        .get((request, response) => 
        {
            this.userController.getUsers(request, response);
        })

        this.app.route('/user/:userId')
        .put((request, response) => 
        {
            this.userController.updateUser(request, response);
        })
        .delete((request, response) => 
        {
            this.userController.deleteUser(request, response);
        })

        this.app.route('/login')
        .post((request, response) =>
        {
            this.userController.getUser(request, response);
        })
    }
}