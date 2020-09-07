(function($){"use strict";$(window).on('load',function(){$('body').addClass('loaded');});$(window).on('scroll',function(){if($(window).scrollTop()>50){$('body').addClass('scrollActive');}else{$('body').removeClass('scrollActive');}
if($('body').scrollTop()>=50){$('.scroll-to-top').fadeIn(200);}else{$('.scroll-to-top').fadeOut(200);}});$('body').scrollspy({target:'#navbar',offset:60});smoothScroll.init({offset:60});$(window).on('load',function(){$("html").niceScroll({background:"#fff",cursorcolor:"#744da8",cursorwidth:"16px",scrollspeed:40,mousescrollstep:60,cursorborder:"0px solid #eaeaea",cursorborderradius:"0px",autohidemode:false,zindex:"999"});});$('.img_popup').venobox();$(".rotate").textrotator({animation:"flipUp",separator:",",speed:2000});function getSlide(){var wW=$(window).width();if(wW<601){return 1;}
return 3;}
var mySwiper=$('.screen_carousel').swiper({mode:'horizontal',loop:true,speed:1000,autoplay:1000,effect:'coverflow',slidesPerView:getSlide(),grabCursor:true,pagination:'.screen-pagination',paginationClickable:true,nextButton:'.arrow-right',prevButton:'.arrow-left',keyboardControl:true,coverflow:{rotate:0,stretch:90,depth:200,modifier:1,slideShadows:true}});var swiper=new Swiper('.testi_carousel',{pagination:'.swiper-pagination',paginationClickable:true,loop:true,speed:1000,autoplay:1000});var wow=new WOW({mobile:false,offset:0});wow.init();if($('.subscribe_form').length>0){$('.subscribe_form').ajaxChimp({language:'es',callback:mailchimpCallback,url:"//IconicThemes.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369"});}
function mailchimpCallback(resp){if(resp.result==='success'){$('#subscribe-result').addClass('subs-result');$('.subscription-success').text(resp.msg).fadeIn();$('.subscription-error').fadeOut();}else if(resp.result==='error'){$('#subscribe-result').addClass('subs-result');$('.subscription-error').text(resp.msg).fadeIn();}}
$.ajaxChimp.translations.es={'submit':'Submitting...',0:'We have sent you a confirmation email',1:'Please enter your email',2:'An email address must contain a single @',3:'The domain portion of the email address is invalid (the portion after the @: )',4:'The username portion of the email address is invalid (the portion before the @: )',5:'This email address looks fake or invalid. Please enter a real email address'};})(jQuery);

$(document).ready(function(){
    $('.logos').hide();
    
        var icon= $('.darks .fa-moon'),
            ct = 0;
        $('.darks').click(function(){
            let btn = $(this);
              if(ct===0) {
                  $("body").addClass("dark-mode");
                  $("h1, h2, h3, h4, p, h5, h6, a").addClass("h2-dark");
                  $(".testimonial_area, .screenshot_area, .features_area, .overview_area").addClass("section-dark");
                  $(".dist_wrap, .feature_heading").addClass("dist-dark");
                  $(".download_area").addClass("back-dark");
                  $("header").addClass("nav-dark");
                  $(".hero_area").addClass("back-dark2");
                  $(".logo").hide();
                  $(".logos").show();
                  icon.removeClass('fa-moon').addClass('fa-sun');
                btn.html(btn.html().replace(btn[0].text, "Light mode"));
                ct=1;
              }else{
                  $("body").removeClass("dark-mode");
                  $("h1, h2, h3, h4, p, h5, h6, a").removeClass("h2-dark");
                  $(".testimonial_area, .screenshot_area, .features_area, .overview_area").removeClass("section-dark");
                  $(".dist_wrap, .feature_heading").removeClass("dist-dark");
                  $(".download_area").removeClass("back-dark");
                  $("header").removeClass("nav-dark");
                  $(".hero_area").removeClass("back-dark2");
                  $(".logos").hide();
                  $(".logo").show();
                  icon.removeClass('fa-sun').addClass('fa-moon');
                btn.html(btn.html().replace(btn[0].text, "Dark mode"));
                ct=0;
              }    
         });
        
        
      
      
    
     
    // });
});