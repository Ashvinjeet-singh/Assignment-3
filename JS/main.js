$(document).ready(function()
{   
    $(".blogheader").fadeOut()
    $(".blog-card1,.blog-card2,.blog-card3,.brandheader,.cfmbtn,.collfadeIN,.card,.experts,#abouth,#para1,#para2,.cap2,.cap1,.cap3").hide()
    
    $(".experts").animate(
        {
            right:"100px"
        }
    )
    
   


    // blog -animation
    $(".parablog").mouseenter( function(){
        $(".blogheader").fadeIn(1000);
        $(".blog-card1").slideDown(1500)
        $(".blog-card2").slideDown(1500);
        $(".blog-card3").slideDown(1500);
    });



// brands available
$(".brandslide").mouseenter(function()
{
    $(".brandheader").slideDown(1000)
});


//collection section

$(".Collsection").mouseenter(function()
{
    //click for more btn
    $(".cfmbtn").fadeIn(2000);

    //nike air jordan x off white
    $(".collfadeIN").fadeIn(2000);
});

//people section

$(".people").mouseenter(function()
{
    $(".card").slideDown(1500)
    
    $(".experts").animate(
        {   
            left:"50px",
            opacity:"show"
            
        },3000
    )
});


//about section

$(".paraabout").mouseenter(function()
{
    $("#abouth").slideDown(1500);
    $("#para1").fadeIn(1500);
    $("#para2").fadeIn(1500);
    
});

//slider
$(".head1").mouseenter(function()
{
    $(".cap2").fadeIn(1500);
    console.log("haed1")
    $(".cap1").fadeIn(4000);
    $(".cap3").fadeIn(4000);
    
});

});