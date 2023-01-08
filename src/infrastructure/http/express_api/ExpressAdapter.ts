import { Request, Response } from 'express';

export default class ExpressAdapter{
    static create(fn: any){
        return (req: Request, resp: Response) => {
            let obj = fn(req.params, req.body)
            resp.json(obj)
        }
    }
}