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
    mapApiKey:'AIzaSyDLH92FOUGp0dmYbiqRfnHDLNfia3BX9kY'
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
    mapApiKey:process.env.mapApiKey
}

module.exports=eval(process.env.myEnv)=='undefined' ? devolopment:eval(process.env.myEnv);