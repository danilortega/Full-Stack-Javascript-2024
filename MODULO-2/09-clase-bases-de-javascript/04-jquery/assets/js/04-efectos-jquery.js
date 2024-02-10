$(function(){

    var mostrarOcultar = $('#mostrarOcultar');
    var animarCaja = $('#animarCaja');
    var cajaAnimar = $('#cajaAnimar');
    var cajaCard = $('#cajaCard');

    cajaCard.hide();


    mostrarOcultar.click(function(){
        cajaCard.slideToggle();
    })


    animarCaja.click(function(e){
      
        cajaAnimar.animate({ marginLeft : '500px'},'slow',function(){
            console.log('Animación completa 1')
        })
        .animate({ marginTop : '100px'},'slow',function(){
            console.log('Animación completa 2')
        })
        .animate({ marginLeft : '0'},'slow',function(){
            console.log('Animación completa 3')
        })
        .animate({ marginTop : '0'},'slow',function(){
            console.log('Animación completa 4')
        })

    })
 
})