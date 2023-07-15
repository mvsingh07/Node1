const express = require("express");

const bodyParser = require('body-parser');

const mysql = require("mysql");

const cors = require('cors');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_backend'
});

dbConn.connect();



const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(cors());

const port = 8020;


app.get('/create-table', function(req,res){
    // let query = "CREATE TABLE dietplan (id int(10) primary key auto_increment, name varchar(100), age int(10))";
    // dbConn.query(query, (error, result,fields)=>{
    //     if(!error){
    //         res.send("Table created");
    //     }
    // });


//     let query = "ALTER TABLE users ADD COLUMN caste varchar(20)";
//     dbConn.query(query,(error,result,fields)=>{
//         res.send("Table altered");
//     })

// });
       let query= "Select * from users";
       dbConn.query(query,(error, result,fields)=>{
             if(!error){
                res.send("Record Displayed");
             }
       {

       }
       })
     

});

// app.get('/',(request,response)=>{

//     response.send('working fine')
// });

// app.post('/user/create', (req,res) => {
//     let query = "INSERT INTO `users` (`id`, `name`, `age`, `gender`) VALUES ('3', 'MvSingh', '22', 'Male')";
//     let values = [req.body.name, req.body.age, req.body.gender];
//     dbConn.query(query,values,(error,result,fields) => {
//         let response = {
//             statue: 'OK',
//             message: 'Record inserted'
//         }
//         res.send(response);
//     })
// });

    // app.get('/users',(req,res)=>{
    //     let query = "SELECT * FROM users";
    //     dbConn.query(query,(error, result, fields)=>{
    //         res.send(result);
    //     });
    // });
    
// app.get('/users/:id',(req,res) => {
//     let query = "SELECT * FROM users WHERE id = ?";
//     let values = [req.params.id];
//     dbConn.query(query,values,(error,result,fields)=>{
//         res.send(result);
//     });
// });

app.listen(port,() => console.log(`Server started at port: ${port}`));

// console.log(app);