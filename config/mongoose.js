const mongoose=require('mongoose');
const env=require('./environment');
mongoose.connect(`mongodb+srv://maverick:${env.dbpass}@cluster0.s0lia.mongodb.net/${env.db}?retryWrites=true&w=majority`);

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to mongo db'));

db.once('open',function()
{
    console.log('connected to the database');
})

module.exports=db;