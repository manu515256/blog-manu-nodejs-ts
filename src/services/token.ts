import { AnyARecord } from 'dns';
import jwt from 'jsonwebtoken';
import models from '../models';

const secretKey:string = "2021newyear";


export default{
    encode: async (id:string)=>{
        const token = await jwt.sign({id}, secretKey,{expiresIn:'10d'});
        return token;
    },
    decode: async (token:any)=>{
        try{
            const {id}:any = await jwt.verify(token, secretKey);
            const user = await models.User.findOne({where:{id}});
            user ? user : false;

        }catch(e){
            return false;
        }
    }
}