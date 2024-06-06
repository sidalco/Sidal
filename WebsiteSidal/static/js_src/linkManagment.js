let companyClick = document.getElementById('companyClick');
let companyLink = document.getElementById('companyLink');
let homeClick =document.getElementById('homeClick');
let homeLink =document.getElementById('homeLink');

companyClick.addEventListener('click', ()=>{
    companyLink.click();
});

homeClick.addEventListener('click', ()=>{
    homeLink.click();
});

companyClick.addEventListener('click', ()=>{
    companyLink.click();
});

companyClick.addEventListener('click', ()=>{
    companyLink.click();
});


/*
companyClick.onclick() = companyLink.trigger('click');
// function(){
//     window.location.href = companyLink[0].attr('href');
    
//     // $('.className').attr('href');
//  } 
// // companyClick.onclick() = companyLink.click(); 


$("#contattaci h2").trigger("click");




companyClick.onclick() = function(){
    window.location.href = companyLink.attr('href')
    $('.className').attr('href');
} 

// companyLink.click(); 
*/