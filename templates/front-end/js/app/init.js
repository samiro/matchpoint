window.user = {};

window.user.id = '5629499534213120';


function signinCallback(authResult) {
				  if (authResult['access_token']) {
				  	gapi.auth.setToken(authResult)

				  	gapi.client.load('oauth2', 'v2', function() {
			          var request = gapi.client.oauth2.userinfo.get();
			          request.execute(function(obj){
			          	var email = obj["email"]
			          	$.ajax({
						  type: "POST",
						  url: "/api/user/login",
						  data: {
						  	email: email
						  },
						  dataType: 'json'
						})
						.done(function(data){
							if (data.action == "exist"){
								console.log("El usuario ya existía")
								console.log(data)
								console.log("Aquí se deberia proceder a consultar la información de éste usuario")
							}
							if (data.action == "new"){
								console.log("Bienvenido nuevo usuario")
								console.log(data)
							}

							console.log("Consulto la info de Google Plus del Usuario")
							gapi.client.load('plus','v1', function(){
							  	var request = gapi.client.plus.people.get( {'userId' : 'me'} );
							  	request.execute( function( profile ) {
							  		console.log("Pille la info del usuario")
							  		console.log(profile)
							    });
							});
						})
						.fail(function(error){
							console.log("Error get user.info")
						  	console.log(error)
						})
			          });
			        });

				    document.getElementById('signinButton').setAttribute('style', 'display: none');
				    $("#dynamic_content").show()

				  } else if (authResult['error']) {
				    // Se ha producido un error.
				    // Posibles códigos de error:
				    //   "access_denied": el usuario ha denegado el acceso a la aplicación.
				    //   "immediate_failed": no se ha podido dar acceso al usuario de forma automática.
				    console.log('There was an error: ' + authResult['error']);
				  }
				}