module.exports.home=async function(req,res)
{
    return res.render('home.ejs')
}

module.exports.mystory=function(req,res)
{
    return res.render('secondPage.ejs');
}

module.exports.contact=function(req,res)
{
    return res.render('FourthPage.ejs')
}

module.exports.give=function(req,res)
{
    return res.render('third.ejs');
}