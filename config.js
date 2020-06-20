require('dotenv').config();
const DBNAME = "blogdb";
module.exports= {
 PORT: 5555,
 DBNAME,
 APPNAME: 'blog',
 DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@blog-z710y.mongodb.net/${DBNAME}?retryWrites=true&w=majority`
 
 
}