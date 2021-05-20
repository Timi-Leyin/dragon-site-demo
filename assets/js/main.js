//const amvc = new AMVC();
AOS.init();
handleResponsivity();
$(window).on('scroll', ()=>{
    handleResponsivity();
});

// DISABLE USER DRAG IMAGES 
const images=document.querySelectorAll('img')
images.forEach(img=>{
    img.addEventListener('dragstart',e=>{
        e.preventDefault()
    })
})


const header=document.querySelector('.dgn-header')
// ADD A CLASS OF ACTIVE TO THE HEADER WHEN SCROLL PASS 300 PIXEL

window.addEventListener('scroll',()=>{
if(document.documentElement.scrollTop || document.body.scrollTop > 300){
header.classList.add('active')
}else{
    header.classList.remove('active')
}

})