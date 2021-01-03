import express,{Application,Request,Response,NextFunction} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import router from './routes'
import db from './database/db'

const app:Application = express();

db.authenticate().then(()=>{console.log('Database running')}).catch((e:any)=>{console.log(e)});

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v2', router);



app.listen(5000, () => console.log("servidor corriendo"));