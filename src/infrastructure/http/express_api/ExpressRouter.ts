import UserController from "../../../controllers/UserController";
import { Express } from 'express';
import ExpressAdapter from "./ExpressAdapter";

export default class ExpressRouter{
    static createRoutes(app: Express): Express {
        app.post("/users", ExpressAdapter.create(UserController.registerNewUser))
        return app
    }
}