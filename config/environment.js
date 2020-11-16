const developmet={
    name:'development',
    asset_path:'./assets',
    db:'newProj',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'sagarsethumadhav.develop2019@gmail.com',
            pass:'1234@abcd'
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

module.exports=developmet;