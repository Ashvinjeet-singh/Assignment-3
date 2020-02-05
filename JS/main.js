$(document).ready(function()
{
    $("#abouth,#para1,#para2,#our_team,.card,#gh,.qwe").hide();

    $(".qwe").show(500)

    $(".qwe").mouseenter(function()
    {   
        $("#abouth").fadeIn(1000);
        console.log("Ghsakdsald");
    }
    );

    $(".qwe").mouseenter(function()
    {   
        $("#para1").slideDown(2000);
        console.log("Ghsakdadsasdsasald");
    }
    );

    $(".qwe").mouseenter(function()
    {   
        $("#para2").slideDown(2000);
        console.log("Ghsakdsaldadas");
    }
    );


    $(".people").mouseenter(function()
    {  
        $("#our_team").animate
        (
            {left:"100px"}
        )
        $("#our_team").show(1000)
        $("#our_team").animate
        (
            {right:"100px"}
        )



        $("#gh").animate
        (
            {left:"100px"}
        )
        $("#gh").show(1000)
        $("#gh").animate
        (
            {right:"100px"}
        )

        $(".card").slideDown(2000)

    }
    );


}
);


