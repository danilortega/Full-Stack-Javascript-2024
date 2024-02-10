$(function(){

    $('a').on('click',function(event){

        console.log('Salida de this.hash--->',this.hash)
         // Nos que al hacer click la seccion tenga un id antes de anular el comportamiento
        if ( this.hash !== "" ) {
        // Cambiamos el comportamiento por defecto
        event.preventDefault();
  
        // creamos una variable hash para contener el hash
        var hash = this.hash;
        // console.log('Salida del hash-->',hash)
  
        // Usando el método animate() de jQuery para agregar un desplazamiento suave de la página
        // El número opcional (800) especifica el número de milisegundos que se necesitan para desplazarse al área especificada
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 3000, function(){
  
        //   console.log('window.location.hash-->', window.location.hash)
        
      
        });
      }





    })



})