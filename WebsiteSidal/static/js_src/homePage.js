let btnbk = document.getElementById("btnbk");
let home_img = document.querySelector(".home_img");
let img = document.querySelector(".imgs");
let imgs = document.querySelectorAll(".imgs");
let btnxt = document.getElementById("btnxt");
let div_spaceing = document.querySelector(".div_spaceing");
let service_extra = document.querySelector(".service_extra");
let btnbk_services = document.getElementById('btnbk_services');
let btnxt_services = document.getElementById('btnxt_services');

function scrollLeft(){
    let sclft = home_img.scrollLeft;
    let clwdth = home_img.clientWidth;
    let scwdth = home_img.scrollWidth;
    home_img.scrollLeft+=700;
    console.log(sclft);
    console.log(clwdth);
    console.log(scwdth);
    if(home_img.scrollLeft +home_img.clientWidth+1 >= home_img.scrollWidth){
        home_img.scrollLeft = 0;
    }
}
setInterval(scrollLeft,6000);
btnbk.addEventListener("click",()=>{
    // var widthInfo = img.getBoundingClientRect();
    // var widthof = widthInfo.width;
    console.log('clicked');
    console.log(home_img.scrollLeft);
    home_img.scrollLeft -= 700;
   
})

btnxt.addEventListener("click",()=>{
    // var widthInfo = img.getBoundingClientRect();
    // var widthof = widthInfo.width;
    home_img.scrollLeft += 700;
})

btnbk_services.addEventListener("click",()=>{
    var widthInfo = div_spaceing.getBoundingClientRect();
    var widthof = widthInfo.width - 1;
    console.log('bb');
    service_extra.scrollLeft -= widthof;
    // home_img.scrollLeft -= widthof;
   
})

btnxt_services.addEventListener("click",()=>{
    var widthInfo = div_spaceing.getBoundingClientRect();
    var widthof = widthInfo.width - 1;
    console.log('bb');
    service_extra.scrollLeft += widthof;
    
    
})


