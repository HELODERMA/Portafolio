$(function(){

  //Parar el video cuando salgamos de la ventana modal
  $('#myModal').on('hidden.bs.modal', function (e) {
  $(this).find("iframe")[0].src += "";
});

  $('#mc-embedded-subscribe').click(function(){

    //QUE TIENE EL FORMULARIO
    if ($('#mce-EMAIL').val()=='')
    {
      $('#alert-error').removeClass('hidden').addClass('show');
    }else {
      //El campo email no esta vacio

    }
  });
});
