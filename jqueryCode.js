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
            backgroundColor: '#ff0000',
            borderRadius: "0"
        }, 200);

    });
    
});