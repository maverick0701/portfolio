module.exports.home=async function(req,res)
{
    return res.render('home.ejs')
}

module.exports.mystory=function(req,res)
{
    return res.render('secondPage.ejs');
}