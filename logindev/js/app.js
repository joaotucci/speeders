function logar(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email == "joao123@gmail.com" && password == "1234"){
        alert('LOGIN REALIZADO COM SUCESSO!');
        location.href = "home.html";
    }
    else{
        alert('USUÁRIO INCORRETO!');
    }
    }



