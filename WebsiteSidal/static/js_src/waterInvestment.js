let airComp_box4WaterInvesemetEquipement = document.getElementById('airComp_box4WaterInvesemetEquipement');
let airComp_box4WaterInvesemetSystem = document.getElementById('airComp_box4WaterInvesemetSystem');
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let element_container4WaterInvesemetEquipement = document.getElementById('element_container4WaterInvesemetEquipement'); 
let element_container4WaterInvesemetSystem = document.getElementById('element_container4WaterInvesemetSystem'); 
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let btnxtw1 = document.getElementById('btnxtw1');
let btnbkw1 = document.getElementById('btnbkw1');
let btnbkw2 = document.getElementById('btnbkw2');
let btnxtw2 = document.getElementById('btnxtw2');
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
btnbkw1.addEventListener("click",()=>{
    // var widthInfo = airComp_box4WaterInvesemetEquipement.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4WaterInvesemetEquipement.scrollLeft -= 700;
   
})
btnxtw1.addEventListener("click",()=>{
    // var widthInfo = airComp_box4WaterInvesemetEquipement.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4WaterInvesemetEquipement.scrollLeft += 700;
    
})
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
btnbkw2.addEventListener("click",()=>{
    // var widthInfo = airComp_box4WaterInvesemetSystem.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4WaterInvesemetSystem.scrollLeft -= 700;
   
})
btnxtw2.addEventListener("click",()=>{
    // var widthInfo = airComp_box4WaterInvesemetSystem.getBoundingClientRect();
    // var widthof = widthInfo.width;
    element_container4WaterInvesemetSystem.scrollLeft += 700;
    
})
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||