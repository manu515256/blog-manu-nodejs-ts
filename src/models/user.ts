import {DataTypes} from 'sequelize';
import db from '../database/db';

const User:any = db.define('users',{
    id:{
        type:DataTypes.SMALLINT, primaryKey:true, autoIncrement:true
    },
    username:{
        type:DataTypes.STRING, 
        allowNull:false, 
        unique:true,
        validate:{
            len:{
                args:[2,15],
                msg:"Debe ser entre 2 y 15 caracteres"
            }
        }
    },
    password:{
        type:DataTypes.STRING, 
        allowNull:false,
        validate:{
            len:{
                args:[2,15],
                msg:"Debe ser entre 8 y 20 caracteres"
            }
        }
    },
    rol:{
        type:DataTypes.SMALLINT,
        defaultValue:1
    }

});

User
.sync()
.then(()=>{console.log("User table created")})
.catch((e:any)=>{console.log(e)});

export default User;