$(function(){
    $('.banner-section_slider').slick({
        dots:true,
        prevArrow: '<button class="banner-section_slider-btn banner-section_slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section_slider-btn banner-section_slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
        responsive:[
            {
                breakpoint: 969,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.tab').on('click',function (e){
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find(`div`).removeClass("tabs-content--active"));

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setPosition')
    })
    $('.product-item_favorite').on('click', function (){
        $(this).toggleClass('product-item_favorite--active')
    })
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll:1,
        prevArrow: '<button class="product-slider_slider-btn product_slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider_slider-btn product_slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
        responsive:[
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots:true
                }
            },{
            breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    dots:true
                }
            },{
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    dots:true
                }
            },{
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    dots:true
                }
            }
        ]
    })

    $('.filter-style').styler()
    $('.filter_item-drop, .filter_btn-extra').on('click',function(){
        $(this).toggleClass('filter_item-drop--active');
        $(this).next().slideToggle('200');
    })
    $(".js-range-slider").ionRangeSlider();

    $(".rate-yo").rateYo({
        ratedFill: '#1C62CD',
        normalFill: "#C4C4C4"
    });
    $('.menu_btn').on('click',function (){
        $('.menu-mobile_list').toggleClass('menu-mobile_list--active')
    })

    $('.footer_top-drop').on('click',function (){
        $(this).next().slideToggle();
        $(this).toggleClass('.footer_top-drop--active')
    })

    $('.aside-btn').on('click',function (){
        $(this).next().slideToggle();
    })
});

