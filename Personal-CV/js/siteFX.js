window.onscroll = function () {
    var siteHeader = document.querySelector(".topNavWrap");
    var topNav = document.querySelector(".topNav");
    if (window.scrollY > 0) {
        siteHeader.classList.add('sticky');
        topNav.classList.add('sticky');
        console.log(window.scrollY);
    }else {
        console.log('error' + window.scrollY);
        siteHeader.classList.remove('sticky');
        topNav.classList.remove('sticky');
    }
};