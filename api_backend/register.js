const express = require("express");
const bodyParser = require('body-parser');
const  dbConn = require('./dbConnection');
const cors = require('cors');
// https://www.npmjs.com/package/jsonwebtoken
// https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(cors());

const port = 4000;


app.use('/register',(req,res, next)=>{
    let query = "SELECT * FROM users WHERE email = ?";
    let data = [req.body.email];
    dbConn.query(query,data,(error,result)=>{
        if(result.length > 0){
            res.send({'status':'error','message':'Email id already exists!'});
        }else{
            next();
        }
    });
    
    // console.log("Here is request");
    // res.send("working fine");
    // next();
});
// ALTER TABLE users ADD COLUMN `email` VARCHAR(100), ADD COLUMN `phone` DOUBLE, ADD COLUMN `password` TEXT;
app.post('/register', async (req,res) => {
    let query = "INSERT INTO users (name, age, gender, email, phone, password) VALUE(?,?,?,?,?,?)";
    let hashPassword = await bcrypt.hash(req.body.password,3);
    let data = [req.body.name,req.body.age,req.body.gender,req.body.email,req.body.phone,hashPassword];
    dbConn.query(query,data, (error,result, fields)=>{
        res.send("done");
        // console.log(result);
    },(err)=>{
        console.log(err);
    });
});

app.post('/login',(req,res)=>{
    let query = "SELECT * FROM users WHERE email = ?";
    let data = [req.body.email];
    dbConn.query(query,data, async (error,result)=>{
        if(result.length > 0){
            let passwordVerify = await bcrypt.compare(req.body.password,result[0].password);
            if(passwordVerify){
                res.json({
                    message: "User logged in successfully!",
                    token: jwt.sign({
                        email: result[0].email,
                        phone: result[0].phone
                    },'secret-key',{"expiresIn": "1h"}),
                    user: result[0]
                });
            }else{
                res.json({
                    message: "User details !",
                    token: "",
                });
            }
            
        }else{
            res.json({
                message: "User  incorrect!",
                token: "",
            });
        }
        
    });
});




// app.use((req,res,next)=>{
//     if(req.headers.authorization === undefined){
//         res.send({
//             status: 'error',
//             message: 'Unable to authenticate user!'
//         });
//     }
//     let splitedToken = req.headers.authorization.split(' ');
//     if(splitedToken[1] === undefined){
//         res.send({
//             status: 'error',
//             message: 'Unable to authenticate user!'
//         });
//     }
//     jwt.verify(splitedToken[1], 'secret-key',(err,user)=>{
//         if(!err){
//             next();
//         }else{
//             res.send({
//                 'status': 'error',
//                 'message': 'unable to authenticate'
//             });
//         }
//     })
// });

app.get('/users',(req,res)=>{
    let query = "SELECT * FROM users";
    dbConn.query(query, async(error, result)=>{
        res.send(result);
    })
});

app.get('/user/:id',(req,res)=>{
    let query = "DELETE FROM users WHERE id = ?";
    let data = [req.params.id];
    dbConn.query(query,data,(error, result)=>{
        res.send({'status':'OK','message':'User deleted successfully!'});
    })
});

app.listen(port,() => console.log(`Server started at port: ${port}`));