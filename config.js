require('dotenv').config();
const DBNAME = "blogdb";
module.exports= {
 PORT: process.env.PORT,
 DBNAME,
 APPNAME: 'blog',
 DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@blog-z710y.mongodb.net/${DBNAME}?retryWrites=true&w=majority`
 
 
}