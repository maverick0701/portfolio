const environment = require('./environment');
const ev=require('./environment');
const fs=require('fs');
const path=require('path');
module.exports=(app)=>{
    app.locals.asset_path=function(filePath)
    {
        if(environment.name=='development')
        {
            return filePath;
        }
    return '/'+JSON.parse(fs.readFileSync(path.join(__dirname,'../public/assets/rev-manifest.json')))[filePath];
    }
}