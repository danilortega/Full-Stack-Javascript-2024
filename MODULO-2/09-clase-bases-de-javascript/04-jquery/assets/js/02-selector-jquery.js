$(function(){

    //$('#rojo') Seleccíon de una clase o ID o Etiqueta 
    // .css() es el método
    $('#rojo').css({
        background:'red',
        color:'white',
        padding:'10px'
    })

    $('#amarillo').css({
        background:'yellow',
        color:'black',
        padding:'10px'
    })

    $('#verde').css({
        background:'green',
        color:'black',
        padding:'10px'
    })

    var parrafo = $('p');

    // console.log('Salida de parrafo-->',parrafo)

    parrafo.click(  function( event ) {
        
        event.preventDefault();

         // $(this) hace referencia al elemento que estemos haciendo click
         // console.log('Click en el parrafo-->', $(this));
       
        // Método toggleClass("grande") agrega la clase grande en el primer click y en el segundo 
        // la remueve
        
        $(this).toggleClass("grande");

        // if( !$(this).hasClass('grande') ){
        //     $(this).addClass('grande');
        // }else{
        //     $(this).removeClass('grande');
        // }
           
    })

    // Seleccionamos por el atributo de una etiqueta
    $('[title="Google"]').css({
        background:'grey',
        color:'white',
        decoration:'none',
        display:'block',
        padding:'10px'
    })

    $('[title="Facebook"]').css({
        background:'coral',
        color:'white',
        decoration:'none',
        display:'block',
        padding:'10px'
    })

    var busqueda = $('#caja').find('.resaltado').parent().parent().find('[title="Google"]');
    console.log('Salida de busqueda-->', busqueda);
    busqueda.css({
        background:'purple'
    })





    



})