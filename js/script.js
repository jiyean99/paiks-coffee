// react menu - hamburger menu btn
$(function(){
    $(".nav-btn>span").click(function(){
        $(".react-menu").show();
    })
    $(".react-close").click(function(){
        $(".react-menu").hide();
    })
})
// react menu - submenu-toggle
$(function(){
	$("nav>ul>li").click(function(){
		$(this).find(".res-sub-menu").stop().slideToggle(300)
	})
	$("nav>ul>li").click(function(){
		$(".res-sub-menu").find(".res-sub-menu").stop().slideToggle(300)
	})
});

// page indicator
$(function(){
    //Set count for total number of sections
    $('.num-indi').text($('.main-slide').size());

    //Increase counter i when section passes
    $('.main-slide').each(function (i,el) {
    var waypoint = new Waypoint({
        element: el,
        offset: '50%',
        handler: function (direction) {
            if (direction == 'down') {
                $('.current').text(i+1);
            } else {
                $('.current').text(i);
            }
        }

    })

    });
})

// slide
function slide(){
    var hei = 0; 
    var i = 0; 
    var slide_length = 0; 
    var $indiLi = $(".main-indi>li"); 
    var $mainPanel = $(".main-img-panel");
    var $panelLi = $mainPanel.children('li');

    //초기화 == 0
    function init(){
        hei = $(".main-slide").height();
        i = $(".main-indi>li.main-indi-on").index(); 
        slide_length = $indiLi.length; 
    };

    //event(실행되는) : 인디케이터, next , prev
    function slideEvent(){
        $indiLi.click(function(){
            i = $(this).index();
            slideMove();
        })

        $(".main-next").click(function(){
            nextPlay();
        })

        $(".main-prev").click(function(){
            prevPlay();
        })

        //자동함수
        mainAutoPlay();
        mainAutoPlayStop();
        mainAutoPlayRestart();
    };

    //next(함수)
    function nextPlay(){
        if(i == slide_length - 1){
            i = 0;
        }else{
            i++;
        }
        slideMove();
    };

    //prev(함수)
    function prevPlay(){
        if(i == 0){
            i = slide_length - 1;
        }else{
            i--;
        }
        slideMove();
    };

    //슬라이드이동(함수)
    function slideMove(){
        $mainPanel.stop().animate({'margin-top': -hei * i}); 
        $indiLi.removeClass('main-indi-on');
        $indiLi.eq(i).addClass('main-indi-on');

    };

    //자동함수
    function mainAutoPlay(){
        auto = setInterval(function(){
            nextPlay();
        },4000) 
    };
    function mainAutoPlayStop(){
        $panelLi.mouseenter(function(){
            clearInterval(auto)
        })
    };    
    function mainAutoPlayRestart(){
        $panelLi.mouseleave(function(){
            auto = setInterval(function(){
                nextPlay();
            },4000)
        })
    };

    //브라우저사이즈(함수)
    function resize(){
       $(window).resize(function(){
           init();
           $mainPanel.css({'margin-top': -hei * i}); 
       })
    }

    init();
    slideEvent();
    resize(); 
}

$(document).ready(function() {
    slide();
  });


// 슬라이드숫자
$(function(){
    $(".num-indi>ul>li").find(function(){
        $(this).parent().parent(".search-list").siblings(".search>fieldset>legend").text(text("02"));

        $(".search-list").hide();

        $(".search-list").children().children().removeClaSS("list-on");

        $(".search-list").children().find($(this)).removeClaSS("list-on");
    })
});
  

//scroll down btn
$(function(){
    $("a[href^='#scrollMenu']").click(function(e){
        e.preventDefault();
        var target = $(this.hash);
        
        $("html,body").animate({scrollTop : target.offset().top},1000)
    })
});

// section-1 tab
$(function(){
    $(".tab-list").each(function(){

        var tab = $(this).find("li.active"); 
        var link = tab.find("a"); 
        var panel = $(link.attr("href"));


        $(this).on("click",".tab-control",function(e){
            e.preventDefault(); 
            var link = $(this);
            var id = this.hash; 

            if(id && !link.is(".active")){  
                panel.removeClass("active");
                tab.removeClass("active");

                panel = $(id).addClass("active");
                tab = link.parent(). addClass("active");
            }
        })
    })
})