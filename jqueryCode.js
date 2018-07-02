$(document).ready(function() {
    $("body").on("click", function(){

        $(".animate").animate({
            width: "50px",
            opacity: 0.4,
            marginLeft: "5%",
            marginTop: "5%",
            height: 50,
            backgroundColor: "yellow",
            borderRadius: "50%"
        }, 200)
        .animate({
            width: "75px",
            opacity: 0.6,
            marginLeft: "10%",
            marginTop: "0%",
            height: 50,
            backgroundColor: "pink"
        }, 500)
        .animate({
            width: "75px",
            opacity: 0.8,
            marginLeft: "15%",
            marginTop: "15%",
            height: 100,
            backgroundColor: "blue",
            borderRadius: "50%"
        }, 200)
        .animate({
            width: "100px",
            opacity: 1,
            marginLeft: "50%",
            marginTop: "15%",
            height: 100,
            backgroundColor: "red",
            borderRadius: "0"
        }, 200);

    });
    

    $("p ~ p").css("border", "1px solid red"); //پارگراف هایی که بعد از یک پاراگراف آمده اند و در یک سطح هستند
    $("p + p ~ p").css("background", "pink"); //پاراگراف هایی که به از دو پارگراف پشت سر هم در یک سطح هستند

    $("div p:first-child").css("border", "1px solid blue");
    $("div p:last-of-type").css("border", "1px solid blue");
    $("div p:nth-child(3)").css("border", "1px solid green");
    $("div p:nth-child(2n)").css("border", "2px solid orange");

    $("ul").children().css("border", "1px solid blue");

    $("li").wrap('<div style="background: pink" />');
    $("li").wrapAll('<div style="border: 1px solid lime" />');

    $("p").on("mouseover mouseleave", function(){
        $(this).toggleClass("highrlighted");
    });

    $("p").on("click", function(){
        $("p").off("mouseover mouseleave");
        $(this).removeClass("highrlighted");
    });

});