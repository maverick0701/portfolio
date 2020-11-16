const express=require('express');
const { request } = require('express');
const app=express();
const port=8000;
 
const db=require('./config/mongoose');
const sassMiddleware=require('node-sass-middleware');
const expressLayouts=require('express-ejs-layouts');
const env=require('./config/environment');
const path=require('path');
app.use(express.urlencoded());



app.use(sassMiddleware({
    src:path.join(__dirname,env.asset_path,'/scss'),//from where to pick up css file for compilation
    dest:path.join(__dirname,env.asset_path,'/css'),
    debug:true,//when in production put false
    outputStyle:'extended',
    prefix:'/css'//where should look into for css
}))
app.use(express.static(env.asset_path));


app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



app.set('view engine','ejs');
app.set('views','./views');



app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err)
    {
        console.log('error here at line 77 in index.js');
        return;
    }
    console.log('server is running on port:',port)
});

