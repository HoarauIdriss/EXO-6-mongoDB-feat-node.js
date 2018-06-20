$(function () {
    // console.log($)
    $('#lolita').html(`
    <div class="container mt-5">
    <div class="jumbotron text-center">
    <h1 class="display-4">EXO 6 de Hoarau Idriss</h1>
    <p> Si seulement j'étais un expert du back-end, le code serait à genoux</p>
    <hr class="my-4">
    <ul></ul>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Clicker ici pour devenir un expert du back-end</a>
    </p>
  </div>
  </div>
  
  
  <div class="container">
  <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
</form>
</div>`);
    $.ajax({
        url: 'http://localhost:3008/personne',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                // var lolita = "";
                // if (data.id == "") {
                //     lolita = name + genre;
                //     console.log(data);
                // }
                 $('ul').append('<li> ' + data[i].name + ' ' + data[i].genre + '</li>');     
              
            };
        },
        error: function (res, stat, error) {
            console.log('La requête n\'a pas abouti');
        }
    });

});