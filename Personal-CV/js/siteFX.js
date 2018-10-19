var siteAbout = document.getElementById("about");
var siteExp = document.getElementById("exp");
var siteWork = document.getElementById("work");
var siteContact = document.getElementById("contact");

var sitePart = document.getElementsByClassName("offsetYdiv");
var offsetY_Part;

var disDiff = [];

//offset是不会变的值，为对应div相对于页面顶部(非浏览器窗口顶部的值，与scrollY不同)
//about:580;exp:1200;wori:1650;contact:2270
/*for (let i = 0; i < sitePart.length; i++) {
    offsetY_Part = sitePart[i].offsetTop;
    console.log(`第${i}个距离顶部${offsetY_Part}像素`);
    console.log(`对应id是${sitePart[i].id}`);
}*/

//下滑进入某区域时的渐入动画
function slideEnterAnim(scrollY){
    //测试用，exp区块的距离
    // var disdiff2 = 1200 - (document.documentElement.clientHeight + scrollY);
    for (let i = 0; i < 4; i++) {
        offsetY_Part = sitePart[i].offsetTop;
        console.log(`第${i+1}个距顶${offsetY_Part}px`);
        disDiff[i] = offsetY_Part - (document.documentElement.clientHeight + scrollY);
        console.log(`diff0变化后的距离差${disDiff[i]}`);
        if (disDiff[i] < -250 ) {
            sitePart[i].classList.add('slideUp');
        }else if (disDiff[i] > -200) {
            sitePart[i].classList.remove('slideUp');
        }
    }
}
//滑动到对应区块时 topNav的tab自动高亮(出下划线)
function tabAutoHighLight(scrollY) {
    for (let index = 0; index < sitePart.length; index++) {
        var distanceEnter = sitePart[index].offsetTop - scrollY;
        var activeTab = document.querySelector(`[href='#${sitePart[index].id}']`);
        var actHomeTab = document.querySelector(`[href="#top"]`);
        if (scrollY < 240) {
            actHomeTab.classList.add('highlight');
        }else {
            actHomeTab.classList.remove('highlight');
        }
        if (distanceEnter < 250) {
            console.log(`高亮distance为${distanceEnter}`);
            for (let i = 2; i < 6; i++) {
                //这4个顺序的节点正好对应about exp work contact
                activeTab.parentElement.children[i].classList.remove('highlight');
            }
            activeTab.classList.add('highlight');
        }else if (distanceEnter > 280) {
            activeTab.classList.remove('highlight');
        }
    }
}

if (window.scrollY < 240) {
    var actHomeTab = document.querySelector(`[href="#top"]`);
    actHomeTab.classList.add('highlight');
}
actHomeTab.onclick = ()=>{
    for (let i = 2; i < 6; i++) {
        actHomeTab.classList.add('highlight');
        //这4个顺序的节点正好对应about exp work contact
        actHomeTab.parentElement.children[i].classList.remove('highlight');
    }
};

window.onscroll = function () {
    var siteHeader = document.querySelector(".topNavWrap");
    var topNav = document.querySelector(".topNav");
    if (window.scrollY > 0) {
        siteHeader.classList.add('sticky');
        topNav.classList.add('sticky');
        // console.log(`滚动坐标${window.scrollY}`);
        tabAutoHighLight(window.scrollY);
        slideEnterAnim(window.scrollY);
    }else {
        console.log('回归原点坐标' + window.scrollY);
        siteHeader.classList.remove('sticky');
        topNav.classList.remove('sticky');
    }
};



//无用废声明
/*var offsetY_About = siteAbout.offsetTop;
var offsetY_Exp = siteExp.offsetTop;
var offsetY_Work = siteWork.offsetTop;
var offsetY_Contact = siteContact.offsetTop;
console.log('siteAbout');
console.log(siteAbout.offsetTop);
console.log('siteExp');
console.log(siteExp.offsetTop);
console.log('siteWork');
console.log(siteWork.offsetTop);
console.log('siteContact');
console.log(siteContact.offsetTop);*/

