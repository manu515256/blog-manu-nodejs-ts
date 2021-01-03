import {Request,Response,NextFunction} from 'express';
import models from '../models';
import bcrypt from 'bcryptjs';
import token from '../services/token';

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
    login: async (req:Request,res:Response,next:NextFunction) =>{
        try {

            let user = await models.User.findOne({where:{username:req.body.username}});

            if(user){
                let match = await bcrypt.compare(req.body.password, user.dataValues.password);

                if(match){
                    let getToken = await token.encode(user.id);
                    res.status(200).json({'token':getToken, user});
                }else{
                    res.status(401).send("wrong password");
                }
            }else{
                res.status(404).send("wrong username");
            }
        }catch(e){
            res.status(500).send("An error ocurred");
            next(e);
        }
    }

}
