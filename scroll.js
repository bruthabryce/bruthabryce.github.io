const buttontop = document.querySelector("#buttontop");


buttontop.addEventListener("click" , function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("footer").style.bottom = "0";
    } else {
        document.getElementById("footer").style.bottom = "-100px";
    }
    prevScrollpos = currentScrollPos;
}


const bodyTag = document.querySelector(".project_page")
const progressTag = document.querySelector("div.progress")

document.addEventListener("scroll", function(){
     const pixels = window.pageYOffset
     const pageHeight = bodyTag.getBoundingClientRect().height
     const totalScrollableDistance = pageHeight - window.innerHeight

    const percentage = pixels / totalScrollableDistance
    progressTag.style.width = `${100 * percentage}%`
})
