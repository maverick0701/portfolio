const fs=require('fs');
const rfs=require('rotating-file-stream');
const path=require('path');
const logDirectory=path.join(__dirname,'../production_logs');
fs.existsSync(logDirectory)||fs.mkdirSync(logDirectory);
const accessLogStream=rfs.createStream('access.log',{
    interval:'1d',
    path:logDirectory
})
const developmet={
    name:'development',
    asset_path:process.env.ASSETS_PATH,
    db:'newProj',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.portGmailuser,
            pass:process.env.portGmailpass
        }
    },
    mapApiKey:process.env.mapApiKey,
    morgan:{
        mode:'dev',
        options:{stream:accessLogStream}
    }
}
const production={
    name:'production',
    asset_path:process.env.ASSETS_PATH,
    db:'newProjPROD',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.portGmailuser,
            pass:process.env.portGmailpass
        }
    },
    mapApiKey:process.env.mapApiKey,
    morgan:{
        mode:'combined',
        options:{stream:accessLogStream}
    }
}

module.exports=eval(process.env.myEnv)=='undefined' ? devolopment:eval(process.env.myEnv);