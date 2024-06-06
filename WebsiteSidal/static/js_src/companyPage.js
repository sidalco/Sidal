let news_box = document.getElementById('news_box');
let catalogue_box = document.getElementById('catalogue_box');
let branches_box =document.getElementById('branches_box'); 
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let element_container4news =document.getElementById('element_container4news'); 
let element_container4tcatalogue =document.getElementById('element_container4tcatalogue'); 
let element_container4branches = document.getElementById('element_container4branches');
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let btnbk_news = document.getElementById('btnbk_news');
let btnxt_news = document.getElementById('btnxt_news');
let btnbk_catalogue = document.getElementById('btnbk_catalogue');
let btnxt_catalogue = document.getElementById('btnxt_catalogue');
let btnbk_branches = document.getElementById('btnbk_branches');
let btnxt_branches = document.getElementById('btnxt_branches');
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
btnbk_news.addEventListener("click",()=>{
    // var widthInfo = news_box.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4news.scrollLeft -= 700;
    console.log('bb');
})
btnxt_news.addEventListener("click",()=>{
    // var widthInfo = news_box.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4news.scrollLeft += 700;
    console.log('bb');
})
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
btnbk_catalogue.addEventListener("click",()=>{
    // var widthInfo = catalogue_box.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4tcatalogue.scrollLeft -= 700;
    console.log('bb');
})
btnxt_catalogue.addEventListener("click",()=>{
    // var widthInfo = catalogue_box.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4tcatalogue.scrollLeft += 700;
    console.log('bb');
})
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
btnbk_branches.addEventListener("click",()=>{
    // var widthInfo = branches_box.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4branches.scrollLeft -= 700;
    console.log('bb');
})
btnxt_branches.addEventListener("click",()=>{
    // var widthInfo = branches_box.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4branches.scrollLeft += 700;
    console.log('bb');
})
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||





