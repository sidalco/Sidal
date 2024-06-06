//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    let element_container4SteelStanless = document.getElementById('element_container4SteelStanless');
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/****/
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    let airComp_box4SteelStanless =document.getElementById('airComp_box4SteelStanless');
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/****/
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    let btnbks1 = document.getElementById('btnbks1');
    let btnxts1 = document.getElementById('btnxts1');
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/****/
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    btnbks1.addEventListener("click",()=>{
        // var widthInfo = airComp_box4SteelStanless.getBoundingClientRect();
        // var widthof = widthInfo.width;
        element_container4SteelStanless.scrollLeft -= 700;
    
    })
    btnxts1.addEventListener("click",()=>{
        // var widthInfo = airComp_box4SteelStanless.getBoundingClientRect();
        // var widthof = widthInfo.width;
        element_container4SteelStanless.scrollLeft += 700;
        
    })
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/****/
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||