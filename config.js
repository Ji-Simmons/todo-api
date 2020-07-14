require('dotenv').config();
const DBNAME = "termsdb";
module.exports= {
 PORT: process.env.PORT,
 DBNAME,
 APPNAME: 'glossary',
 DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@blog-z710y.mongodb.net/${DBNAME}?retryWrites=true&w=majority`
 
 
}