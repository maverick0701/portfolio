const nodeMailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.newComment = function(user){

    // console.log('inside newComment mailer', user);
    console.log(user,'*&^%$#$%^&*()(*&^%$#$%^&*()(*&^%$#$%^&*');
    let htmlString=nodeMailer.renderTemplate({user:user},'/message.ejs');
    console.log(htmlString);
    nodeMailer.transporter.sendMail({
       from: 'sagarsethumadhav.develop2019@gmail.com',
       to: 'madhavanandcp070@gmail.com',
       subject: "New Message",
       html: htmlString 
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message sent', info);
        return;
    });
}