

document.getElementById('logInButton').addEventListener('click', function() {

            var usuario = document.getElementById('usuario').value;
            var contrasena = document.getElementById('contrasena').value;

            console.log('Usuario: ' + usuario);
            console.log('Contraseña: ' + contrasena);
        });

   
        document.getElementById('signUpButton').addEventListener('click', function() {

            window.location.href = 'formulario_registro.html';
        });


        document.getElementById('cancelButton').addEventListener('click', function() {
  
            window.location.href = 'noticias.html';
        });




