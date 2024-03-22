// function show(){
//     document.querySelector('.hamburger').classList.toggle('open')
//     document.querySelector('.navigation').classList.toggle('active')
// }
const icon = document.querySelector('.menu-icon');
const secNav = document.querySelector('.navigation');
icon.addEventListener('click', ()=>{
    // secNav.setAttribute('style','right:0px');
    secNav.classList.toggle('toggalSecNav')

    
});