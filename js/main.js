jQuery(function(i){"use strict";i(".nav_content").on("click","a",function(e){e.preventDefault();e=i(this).attr("href"),e=i(e).offset().top;i(this).parent().addClass("active").siblings().removeClass("link-active"),i("body,html").animate({scrollTop:e-30},1e3)}),i(".toggle_menu").click(function(){return i(this).toggleClass("active"),i(".wrap_menu").toggleClass("active"),i(".contacts_head").toggleClass("active"),i("body").toggleClass("deactive"),!1}),i(".wrap_information .link_more").click(function(){return i(this).hide(),i(this).parent().find(".step_service").addClass("active"),i(this).parent().find(".item_step").addClass("active"),!1}),i(".js-searchFormTrigger").click(function(){return i(".searchForm").addClass("_expanded"),!1}),i(".js-searchFormTrigger").click(function(){i(".searchForm").addClass("_expanded")}),i(document).on("click",function(e){i(".searchForm").removeClass("_expanded"),e.stopPropagation()}),i(".title_form_mob").click(function(){return i(this).addClass("active"),i(".form_tariff").addClass("active"),i("body").addClass("deactive"),i(".btn_top").hide(),!1}),i(".close_fixed").click(function(){return i(".title_form_mob").removeClass("active"),i(".form_tariff").removeClass("active"),i("body").removeClass("deactive"),i(".btn_top").show(),!1}),i("img.svg").each(function(){var s=jQuery(this),t=s.attr("id"),i=s.attr("class"),e=s.attr("src");jQuery.get(e,function(e){e=jQuery(e).find("svg");void 0!==t&&(e=e.attr("id",t)),void 0!==i&&(e=e.attr("class",i+" replaced-svg")),e=e.removeAttr("xmlns:a"),s.replaceWith(e)},"xml")}),i(".carousel_banner").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3}),i(".carousel_service").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1108,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:910,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:700,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),i(".carousel_work").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1108,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:860,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:550,settings:{slidesToShow:1,slidesToScroll:1}}]}),i(".carousel_testimonials").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:8e3,responsive:[{breakpoint:520,settings:{slidesToShow:1,slidesToScroll:1}}]}),i(".carousel_advantage").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3});var a,o=i(".gallery_service").slick({dots:!0,arrows:!0,infinite:!1,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3});i(window).width()<800&&(a=i(".menu_fixed ul").slick({dots:!1,arrows:!0,infinite:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:700,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:560,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:460,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:400,settings:{slidesToShow:1,slidesToScroll:1}}]})),i("body").on("click",".btn_top",function(){return i("html, body").animate({scrollTop:0},1e3),!1}),i(".tabs_tariff .tab").click(function(){var e=i(".tabs_tariff .tab"),s=i(".content_tariff .inner_tariff"),t=i('.check_tariff input[name="tariff"]');return e.removeClass("active"),s.removeClass("active"),i(this).addClass("active"),i(".item_content").removeClass("active"),i(".item_content").eq(i(this).index()).addClass("active"),i(".wrap_menu_fix .item_menu").removeClass("active"),i(".wrap_menu_fix .item_menu").eq(i(this).index()).addClass("active"),s.eq(i(this).index()).addClass("active"),t.eq(i(this).index()).prop("checked",!0),o.slick("refresh"),a.slick("refresh"),!1}),i(".inner_tariff").click(function(){var e=i(".inner_tariff"),s=i(".content_tariff .inner_tariff"),t=i('.check_tariff input[name="tariff"]');return e.removeClass("active"),s.removeClass("active"),i(this).addClass("active"),i(".item_content").removeClass("active"),i(".item_content").eq(i(this).index()).addClass("active"),i(".tabs_tariff .tab").removeClass("active"),i(".tabs_tariff .tab").eq(i(this).index()).addClass("active"),i(".wrap_menu_fix .item_menu").removeClass("active"),i(".wrap_menu_fix .item_menu").eq(i(this).index()).addClass("active"),s.eq(i(this).index()).addClass("active"),t.eq(i(this).index()).prop("checked",!0),o.slick("refresh"),a.slick("refresh"),!1}),i(".check_tariff").click(function(){i(".tabs_tariff .tab").removeClass("active"),i(".inner_tariff").removeClass("active"),i(".tabs_tariff .tab").eq(i(this).index()).addClass("active"),i(".inner_tariff").eq(i(this).index()).addClass("active"),i(".item_content").removeClass("active"),i(".item_content").eq(i(this).index()).addClass("active"),i(".wrap_menu_fix .item_menu").removeClass("active"),i(".wrap_menu_fix .item_menu").eq(i(this).index()).addClass("active"),o.slick("refresh"),a.slick("refresh")}),i(".tabs_tariff .tab").hover(function(){i(this).addClass("hovered"),i(".inner_tariff").eq(i(this).index()).addClass("hovered")},function(){i(this).removeClass("hovered"),i(".inner_tariff").eq(i(this).index()).removeClass("hovered")}),i(".inner_tariff").hover(function(){i(this).addClass("hovered"),i(".tab").eq(i(this).index()).addClass("hovered")},function(){i(this).removeClass("hovered"),i(".tab").eq(i(this).index()).removeClass("hovered")});var t,e=i(".menu_fixed"),r=e.outerHeight()+180,n=e.find("a"),l=n.map(function(){var e=i(i(this).attr("href"));if(e.length)return e});n.click(function(e){var s=i(this).attr("href"),s="#"===s?0:i(s).offset().top-r+1;i("html, body").stop().animate({scrollTop:s},300),e.preventDefault()}),i(window).scroll(function(){var e=i(this).scrollTop()+r,s=l.map(function(){if(i(this).offset().top<e)return this}),s=(s=s[s.length-1])&&s.length?s[0].id:"";t!==s&&(t=s,n.parent().removeClass("active").end().filter("[href='#"+s+"']").parent().addClass("active"))}),i(".statistik").viewportChecker({callbackFunction:function(e,s){i("#lines1").animateNumber({number:90},1500),i("#lines2").animateNumber({number:70},1500)}}),i('input[type="tel"]').mask("+7 (999) 999-99-99")}),$(window).scroll(function(){$(this).scrollTop()>$(this).height()?$(".scroll_top").addClass("active"):$(".scroll_top").removeClass("active")});var hHeight,h=document.querySelector(".tariff_fixed"),b=document.querySelector(".breadcrumbs");function onScroll(){window.addEventListener("scroll",function(){var e=window.pageYOffset;197<e?(h.classList.add("scroll"),h.style.height="-110%",h.style.transition="top .5s"):h.classList.remove("scroll");155<e?(h.style.top="0",h.style.transition="top .5s"):h.style.top="-110%"})}window.onload=function(){onScroll()};