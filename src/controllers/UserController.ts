import {Request,Response,NextFunction} from 'express';
import models from '../models'
import bcrypt from 'bcryptjs'
import token from '../services/token'

export default{
    add: async (req:Request,res:Response,next:NextFunction) => {
        try{
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const reg = models.User.create(req.body);
            res.status(200).send(reg);
        
        }
        catch(e:any){
            res.status(500).send("An error courred");
            next();
        }
    },

}
