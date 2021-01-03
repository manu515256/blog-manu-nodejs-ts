import {Request,Response,NextFunction} from 'express';
import tknService from '../services/token';
// 1 admin 2 usuario 3 lector
export default{
    
    verifyAdmin: async (req:Request,res:Response,next:NextFunction) =>{
        
        if(!req.headers.token) return res.status(404).send("No token found");
        const response:any = await tknService.decode(req.headers.token);

        if (response.rol == 1) next();
        else return res.status(403).send("not authorized");

    },
    verifyUser: async (req:Request,res:Response,next:NextFunction) =>{
        
        if(!req.headers.token) return res.status(404).send("No token found");
        const response:any = await tknService.decode(req.headers.token);

        if (response.rol == 2) next();
        else return res.status(403).send("not authorized");

    },
    
}