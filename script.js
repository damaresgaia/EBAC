$(document).ready(function () {
    $('#formularioTarefa').submit(function (evento) {
      evento.preventDefault();
  
      const textoTarefa = $('#entradaTarefa').val();
      if (textoTarefa) {
        $('#listaTarefas').append(`<li>${textoTarefa}</li>`);
        $('#entradaTarefa').val('');
      }
    });
  
    $('#listaTarefas').on('click', 'li', function () {
      $(this).toggleClass('completada');
    });
  });
  