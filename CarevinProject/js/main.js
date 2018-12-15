let menu_pages = $(".pages"),
    submenu_pages = $(".main-submenu"),
    down_arrow = $(".down-arrow");

menu_pages.click(()=>{
    down_arrow.toggleClass("click");
    submenu_pages.slideToggle(400);

});


console.log(menu_pages,submenu_pages);



//引入轮播
let mySwiper = new Swiper ('.swiper-container.top-slide-wrap', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
    },
});

let mySwiper2 = new Swiper ('.swiper-container.parent-reviews', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
        delay: 3000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
    },
});

