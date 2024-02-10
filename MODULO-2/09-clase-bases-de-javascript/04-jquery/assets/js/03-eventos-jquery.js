$(function () {


    var caja = $('#caja');
    var nombre = $('#nombre');
    var mensaje = $('.alert-secondary')


    function eventOrange(){
        $(this).css({
            background:'orange'
        })
    }

    function eventPurple(){
        $(this).css({
            background:'purple'
        })
    }

    caja.hover(eventOrange,eventPurple);

    caja.dblclick(function(){
        $(this).css({
            background:'pink',
            color:'black'
        })
    })

    nombre.focus(function(e){
        $(this).css({
            border:'1px solid red',
            'box-shadow':'none'
        })
        console.log('Estoy en foco')
        mensaje.show('slow');
    })

    nombre.blur(function(e){
        $(this).css({
            border:'1px solid green'
    
        })
        console.log('Estoy fuera del  foco')
        mensaje.hide('fast');
    })


    $(document).mousemove(function(event){

        console.log(`Posicion Eje X : ${event.clientX}`)
        console.log(`Posicion Eje Y : ${event.clientY}`)

        $('body').css({
            cursor:'none'
        })

        $('.circle').css({
            left:event.clientX,
            top:event.clientY
        })
    })


    
});