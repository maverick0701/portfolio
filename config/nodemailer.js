const nodemailer=require('nodemailer');
const ejs=require('ejs');
const path=require('path');

let transporter=nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'sagarsethumadhav.develop2019@gmail.com',
        pass:'1234@abcd'
    }
});

let renderTemplate=(data,relativePath)=>{
    let mailHtml;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,note)
        {
            if(err){console.log('error in rendering template',err);return;}
            mailHtml=note
        }      
    )
    return mailHtml;
}


module.exports={
    transporter:transporter,
    renderTemplate:renderTemplate
}