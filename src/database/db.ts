import {Sequelize} from 'sequelize';


const sqlize:any = new Sequelize(
    'blog',
    'root',
    'admin123',
    {
        host:'localhost',
        dialect:'mysql',
        logging:false
    }
)

export default sqlize;