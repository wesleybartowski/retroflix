function Entrar(){
    let usuario = document.getElementById('user').value;
    let senha1 = document.getElementById('senha').value;
    if (usuario == "" && senha1 == "") {
        alert("informe usuario e senha")

    }
    else {
        sessionStorage.setItem('usuario', usuario);
        alert("bem vindo:" + "!" + sessionStorage.getItem("usuario"));
        window.location.replace("filmes.html");
        
       
    }

}




function pagina(){
    document.getElementById("demo").innerHTML = sessionStorage.getItem("usuario");
    alert(sessionStorage.getItem("usuario"))
}
