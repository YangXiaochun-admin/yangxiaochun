$(function(){
    $("#Top").css("display","none");
    var number=0;
    $(window).on("scroll",function(){
        if(($(window).scrollTop())>($(".banner").offset().top)){
            $("#Top").css("display","block");
        }
        var tops=$(window).scrollTop();
        $("#Top").click(function(){
            var index=$(this).index();
            var newObj={st:tops};
            $(newObj).animate({st:0},{duration:1000,
                step:function(){
                    $(window).scrollTop(newObj.st);
                }})
        })

    })
})