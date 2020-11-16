const User=require('../models/mongoose');

const mail=require('../mailer/mailer');


module.exports.home=async function(req,res)
{
    return res.render('_firstpage.ejs')
}

module.exports.mystory=function(req,res)
{
    return res.render('_secondpage.ejs');
}

module.exports.contact=function(req,res)
{
    return res.render('_fourthpage.ejs')
}

module.exports.give=function(req,res)
{
    console.log(process.env.ASSETS_PATH,'4%^&*()&^%$#@#$%^&*()(*&^%$@#$%^&*()');
    return res.render('_third.ejs');
}

module.exports.touch=function(req,res)
{
    console.log(req.body);
    User.create({ 
        date:Date.now(),
        email:req.body.email,
        phone:req.body.phn,
        name:req.body.name,
        message:req.body.comment
    },function(err,user)
    {
        // User.save();
        // console.log(user,'*&^%$#$%^&*()(*&^%$#$%^&*()(*&^%$#$%^&*');
        mail.newComment(user);
        return res.redirect('back');
    })
    
}

module.exports.fifth=function(req,res)
{
    return res.render('_fifthpage.ejs');
}