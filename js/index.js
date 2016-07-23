$(function(){
    var $menu=$(".menu");
    var $lists=$(".lists");
    var $minNav=$(".nav-box");
    var $shop=$(".shop");
    var ch=document.documentElement.clientHeight;
    $(window).resize(function () {
        var cw=document.documentElement.clientWidth;
        console.log(cw);
        if(cw<768){
            $menu.click(function(){
                var $ids=$menu.attr("id");
                if($ids=='active'){
                    $menu.removeAttr("id");
                    $lists.hide();
                    $shop.css("opacity","1");
                    $shop.css("transition","all 0.3s");
                }else{
                    $menu.attr("id","active");
                    $lists.show();
                    $minNav.css("background","black");
                    $shop.css("opacity","0");
                    $shop.css("transition","all 0.3s");
                }
            });
        }
    });

    
    // banner轮播图
    var $ban=$(".banner-box");
    var $banImg=$(".row>.col-lg-20");
    var $banLis=$(".btnbox .circle");
    var $banBtn=$(".btn div");
    var now=0;
    var next=0;

    var flag=true;
    $banImg.css({left:"100%"}).eq(now).css({left:0});
    $banLis.eq(now).attr("id","active");
    var banT=setInterval(moveLeft,2000);
    $ban.mouseover(function(){
        $banBtn.css("display","block");
        clearInterval(banT);
    });
    $ban.mouseout(function(){
        $banBtn.css("display","none");
        banT=setInterval(moveLeft,2000);
    })

    $banLis.click(clickFn);

    $banBtn.eq(0).click(function(){
        if(flag){
            flag=false;
            moveRight();
        }
    })

    $banBtn.eq(1).click(function(){
        if(flag){
            flag=false;
            moveLeft();
        }
    })

    function moveLeft(){
        next++;
        if(next==$banImg.length){
            next=0;
        }
        $banLis.removeAttr("id");
        $banLis.eq(next).attr("id","active");
        $banImg.eq(next).css({left:"100%"});
        $banImg.eq(now).animate({left:"-100%"});
        $banImg.eq(next).animate({left:0},function(){
            flag=true;
        });
        now=next;
    }

    function moveRight(){
        next--;
        if(next<0){
            next=$banImg.length-1;
        }
        $banLis.removeAttr("id");
        $banLis.eq(next).attr("id","active");
        $banImg.eq(next).css({left:"-100%"});
        $banImg.eq(now).animate({left:"100%"});
        $banImg.eq(next).animate({left:0},function(){
            flag=true;
        });
        now=next;
    }

    function clickFn(){
        var $index=$(this).index();
        console.log($index)
        $banLis.removeAttr("id");
        $banLis.eq($index).attr("id","active");
        if($index>now){
            $banImg.eq($index).css({left:"100%"});
            $banImg.eq(now).animate({left:"-100%"});
            $banImg.eq($index).animate({left:0});
        }
        if($index<now){
            $banImg.eq($index).css({left:"-100%"});
            $banImg.eq(now).animate({left:"100%"});
            $banImg.eq($index).animate({left:0});
        }
        now=next=$index;
    }

    //底下链接的动画
    var $cols=$(".link .cols");
    var $uls=$(".link ul");
    var $h3s=$(".link h3");
    $h3s.click(function(){
        var idss=$(this).attr("id");
        var index=$(this).index(".link h3");
        if(idss=="active"){
            $(this).removeAttr("id");
            $uls.eq(index).removeAttr("id");
        }else{
            $(this).attr("id","active");
            $uls.eq(index).attr("id","active");
        }
    })
})