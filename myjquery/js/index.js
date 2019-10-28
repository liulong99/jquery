$(document).ready(function(){
    //初始化
    console.log("ready");
    console.log("hi");

    //事件
    $("#luo").click(function(){
        console.log($("div#container1 p:eq(1) span:eq(0)").html());
    });
    $("#feng").mouseenter(function(){
        alert(111);
        console.log($("div#container1 p:eq(1) span:eq(2)").html());
    });
    $("#ruo").mouseleave(function(){
        alert(222);
        console.log($("div#container1 p:eq(1) span:eq(1)").html());
    });
    $("#123").hover(function () {
        //进入id为 123之前
        $(this).html("abc");
    },
     function () {
        //离开id为 123之后
        $(this).html("a1b1c1");
     });
    $("#form").submit(function (e) {
       if($("#name").val()=="baidu"){
           return true;
       }else{
           return false;
       }
    });
    $("#show").hide();
    $("#hide").show();
    $("#show").click(function () {
       $("#p-123").show(1000);
       $(this).hide(1000);
       $("#hide").show(1000);
    });
    $("#hide").click(function () {
        $("#p-123").hide(3000,function(){
            $("#show").click();
        });
        $(this).hide(3000,function(){
            $("#show").click();
        });
        $("#show").show(3000,function(){
            $("#show").click();
        });
    });
    //如果是隐藏，再点击一下就是显示；如果是显示，点击一下就是隐藏
    $("#toggle").click(function () {
        $("#p-123").toggle(1000);
    });

    //选择器获取值
    console.log($("#container2").html());
    console.log($(".c:eq(0)").html());
    console.log($("div:eq(4)").html());
    console.log($("div#container1 p:eq(1) span:eq(2)").html());

    //事件回调ajax
    $.ajax({
        url:"https://free-api.heweather.net/s6/weather/now?location=beijing&key=4693ff5ea653469f8bb0c29638035976",
        method:"get",
        success:function (res) {
            var status=res.HeWeather6[0].status;
            if(status=='ok'){
                var cond_txt=res.HeWeather6[0].now.cond_txt;
                $('.cond_txt').html( cond_txt);
            }else{
                alert("回调失败");
            }
        }
    });
});

function c(){
    alert("我要触发submit事件");
    $("#form").submit();
};
function fadeOut(){
    $("#student").fadeOut(1000);
};
function fadeIn(){
    $("#student").fadeIn(1000);
};
function fadeInOut(){
    fadeOut();
    fadeIn();
};
function move(){
    $("#back").animate({
        "left":"100px",
        "top":"100px",
        // "font-size":"20px"
        "fontSize":"20px"
    },4000);
}