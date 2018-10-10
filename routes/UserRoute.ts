import { Response, Request } from 'express';
import * as express from "express";
import { UserController } from '../controllers/UserController';

export class UserRoute
{
    private app : express.Application;
    public userController : UserController;

    constructor(app : express.Application)
    {
        this.app = app;
        this.userController = new UserController()
        this.setUserRoutes();
    }

    private setUserRoutes() : void 
    {
        this.app.route('/user')
        .post(this.userController.addNewUser)
        .get(this.userController.getUsers);

        this.app.route('/user/:userId')
        .get(this.userController.getUserById)
        .put(this.userController.updateUser)
        .delete(this.userController.deleteUser)
    }
}