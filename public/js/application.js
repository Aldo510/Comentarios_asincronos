$(function(){
  $( "form" ).on("submit", function(event) {
    //retener la informacion hasta que acabe este proceso
    event.preventDefault();
    //Guardar los valores que el usuario haya ingresado con el serialize solo se guardaran los valores y no todo el form
    var form_data = $(this).serialize();
    console.log(form_data);
    //Crear el Ajax sobre el url que se quiere recargar y pasarle los valores que el usuario haya dado
    //Con el function(data) se hara el callback de el metodo y se guardaran los valores que haya regresado el metodo del controller
    $.post('/new_comment', form_data, function(data) {
      //Agregar a el div comment_area lo que contenga ahora data y lo sobreescriba cada vez
      $("#comment_area").html(data);
    });
  });  

  
  //Esta es la forma de appendear sin guardar en la base de datos
  

  // $( "form" ).submit(function( event ) {
  //   var comment = $("#comment").val();
  //   var autor = $("#autor").val();
  //   $("#comment_list").append($("<li>" + comment + "\n<span class=" + "author" + ">" + autor + "</span>" + "</li>" ) )
  //   event.preventDefault();
  // });
});

function new_comment (){
  $("#new_comment_area").css("display", "block");
};