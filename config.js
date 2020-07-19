require('dotenv').config();
const DBNAME = "tasksdb";
module.exports= {
 PORT: process.env.PORT,
 DBNAME,
 APPNAME: 'todo',
 DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@blog-z710y.mongodb.net/${DBNAME}?retryWrites=true&w=majority`
 
 
}