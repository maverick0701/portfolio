const express=require('express');
const { request } = require('express');
const app=express();
const port=8030;
 
const db=require('./config/mongoose');
const sassMiddleware=require('node-sass-middleware');
const expressLayouts=require('express-ejs-layouts');
app.use(express.urlencoded());



app.use(sassMiddleware({
    src:'./assets/scss',//from where to pick up css file for compilation
    dest:'./assets/css',
    debug:true,//when in production put false
    outputStyle:'extended',
    prefix:'/css'//where should look into for css
}))
app.use(express.static('./assets'))


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

