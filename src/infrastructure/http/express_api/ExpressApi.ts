import express from 'express';
import ExpressRouter from './ExpressRouter';

export default class ExpressAPI{
    static listen(port: number){
        let app = express()
        app.use(express.json())
        ExpressRouter.createRoutes(app).listen(port)
    }
}