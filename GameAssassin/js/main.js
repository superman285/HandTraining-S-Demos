
var lggcontent = document.getElementsByClassName("lgg-content");
var lggrect = document.getElementsByClassName("rect");

for (let i = 0; i < lggcontent.length; i++) {

    lggcontent[i].onmouseenter = function () {
        console.log(i+'淡入');
        lggcontent[i].classList.remove('fadeIn');
        lggcontent[i].classList.add('fadeOut');

        lggrect[i].classList.remove('fadeOut');
        lggrect[i].classList.add('fadeIn');
    };

    lggcontent[i].onmouseleave = function () {
        console.log(i+'淡出');
        lggcontent[i].classList.remove('fadeOut');
        lggcontent[i].classList.add("fadeIn");

        lggrect[i].classList.remove('fadeIn');
        lggrect[i].classList.add('fadeOut');
    };
}