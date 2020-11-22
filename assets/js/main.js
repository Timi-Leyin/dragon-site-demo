//const amvc = new AMVC();
AOS.init();
handleResponsivity();
$(window).on('scroll', ()=>{
    handleResponsivity();
});