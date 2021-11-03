let animItems = document.querySelectorAll(`._anim-items`);

if(animItems.length > 0){
    window.addEventListener(`scroll`, animOnScroll);
    function animOnScroll() {
        for(let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint =  window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add(`_active`);
            } else {
                animItem.classList.remove(`_active`);
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
}

//хуита
$('div#first__mouse a').hover(function(e) {
    let yPos = e.pageY;
    let xPos = e.pageX;
    $('div#pash').css({ top: yPos, left: xPos }).fadeIn(500)
},
function() {
    $('div#pash').fadeOut(100)
});