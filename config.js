require('dotenv').config();
const DBNAME = "tododb";
module.exports= {
 PORT: process.env.PORT || 5555,
 DBNAME,
 APPNAME: 'todo',
 DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@blog-z710y.mongodb.net/${DBNAME}?retryWrites=true&w=majority`
 
}