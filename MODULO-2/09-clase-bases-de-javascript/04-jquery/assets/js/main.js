// var body = document.querySelector('body');

$(function(){
    // empieza a trabajar con Jquery o javascript

    var titulo = document.getElementById('titulo');
    var titulo1 = document.querySelector('#titulo')
    var titulo2 = document.querySelector('h1')
    var titulo3 = document.querySelector('.font-weight-bold')
    console.log(titulo1);
    console.log(titulo2);
    console.log(titulo3);

    // $('#titulo');
    // console.log(    $('p').text() );

    var titulo = $('#titulo');
        titulo.dblclick( function(e){
            alert('Hola desde el click del h1')
        } )
});