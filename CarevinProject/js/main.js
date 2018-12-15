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

/*动画效果*/
let fcards = $(".fcard");
for (let i = 0; i < fcards.length; i++) {
    fcards.eq(i).hover(()=>{
        console.log(this);
        fcards.eq(i).toggleClass("animated bounce")})
}

let index_labels = $('.label'),
    fphotos = $('.fphoto');
for (let i = 0; i < fphotos.length; i++) {
    fphotos.eq(i).hover(()=>{
        index_labels.eq(i).toggleClass("animated rubberBand")})
}

let contactus_btn = $('.center-banner button');
let center_banner = $('.center-banner');
center_banner.hover(()=>{
    contactus_btn.toggleClass('animated tada')
});

let facility_btn = $('.facility');
facility_btn.hover(()=>{
   facility_btn.toggleClass('animated shake')
});