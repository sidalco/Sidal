let airComp_box4DODInkJet = document.getElementById('airComp_box4DODInkJet');
let airComp_box4CIJInkJet = document.getElementById('airComp_box4CIJInkJet');
let airComp_box4TIJInkJet = document.getElementById('airComp_box4TIJInkJet');
let airComp_box4LaserMarkingInkJet = document.getElementById('airComp_box4LaserMarkingInkJet');
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let element_container4DODInkJet =document.getElementById('element_container4DODInkJet'); 
let element_container4CIJInkJet =document.getElementById('element_container4CIJInkJet'); 
let element_container4TIJInkJet =document.getElementById('element_container4TIJInkJet'); 
let element_container4LaserMarkingInkJet =document.getElementById('element_container4LaserMarkingInkJet'); 
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let btnbk1 = document.getElementById('btnbkj1');
let btnxt1 = document.getElementById('btnxtj1');
let btnbk2 = document.getElementById('btnbkj2');
let btnxt2 = document.getElementById('btnxtj2');
let btnbk3 = document.getElementById('btnbkj3');
let btnxt3 = document.getElementById('btnxtj3');
let btnbk4 = document.getElementById('btnbkj4');
let btnxt4 = document.getElementById('btnxtj4');
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
btnbkj1.addEventListener("click",()=>{
    // var widthInfo = airComp_box4DODInkJet.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4DODInkJet.scrollLeft -= 700;
})
btnxtj1.addEventListener("click",()=>{
    // var widthInfo = airComp_box4DODInkJet.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4DODInkJet.scrollLeft += 700;
})
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
btnbkj2.addEventListener("click",()=>{
    // var widthInfo = airComp_box4CIJInkJet.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4CIJInkJet.scrollLeft -= 700;
})

btnxtj2.addEventListener("click",()=>{
    // var widthInfo = airComp_box4CIJInkJet.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4CIJInkJet.scrollLeft += 700;
})
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
btnbkj3.addEventListener("click",()=>{
    // var widthInfo = airComp_box4TIJInkJet.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4TIJInkJet.scrollLeft -= 700;
})

btnxtj3.addEventListener("click",()=>{
    // var widthInfo = airComp_box4TIJInkJet.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4TIJInkJet.scrollLeft += 700;
})
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
btnbkj4.addEventListener("click",()=>{
    // var widthInfo = airComp_box4LaserMarkingInkJet.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4LaserMarkingInkJet.scrollLeft -= 700;
})

btnxtj4.addEventListener("click",()=>{
    // var widthInfo = airComp_box4LaserMarkingInkJet.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4LaserMarkingInkJet.scrollLeft += 700;
})
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
