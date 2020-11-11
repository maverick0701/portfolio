let div=$('#homeCard >div');
let currentIndex=0;

$('#nextDiv').click(function(e)
{
    e.preventDefault();
    console.log(div.length);
    if(currentIndex<div.length-1)
    {
        div.eq(currentIndex).addClass('first');
        currentIndex++;
        // console.log(dev.eq(currentIndex))
        div.eq(currentIndex).removeClass('first');
    }


})

$('#prevDiv').click(function(e)
{
    e.preventDefault();
    console.log(div.length);
    if(currentIndex>0)
    {
        div.eq(currentIndex).addClass('first');
        currentIndex--;
        // console.log(dev.eq(currentIndex))
        div.eq(currentIndex).removeClass('first');
    }
    

})
console.log(div);