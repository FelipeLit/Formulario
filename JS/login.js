let btnIngresar = document.getElementById("btnIniciar");

let estudiantes = [
    {name: "Felipe", email: "felipe@gmail.com", password: "123456", genero: 'm' },
    {name: "Juan", email: "juan@gmail.com", password: "123456", genero: 'm' },
    {name: "Lina", email: "lina@gmail.com", password: "123456", genero: 'f'},
]

function checkLogin (){
    
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("pass");

let errorEmail = document.getElementById("error");

if (inputEmail != "" || inputPassword != ""){
    inputEmail.classList.add("is-invalid");

    inputPassword.classList.add("is-invalid");
}

/* if(!inputEmail.value.match(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g)){
    inputEmail.classList.add("is-invalid");
    errorEmail.innerText ="No tiene las caracteristicas de un correo";
} */

estudiantes.forEach((estudiante)=>{
    
        if (inputEmail.value == estudiante.email && inputPassword.value == estudiante.password){
            
            sessionStorage.setItem("Nombre", estudiante.name);
            sessionStorage.setItem("Genero", estudiante.genero)
            window.location.assign('./html/incio.html')
        }
        else if(inputEmail.value != estudiante.email || inputPassword.value != estudiante.password){
            errorEmail.innerText ="Correo y/o contraseña incorrectos";
            
        }  
    }); 

}


btnIngresar.onclick = checkLogin;



function limpiarFormulario (){
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById("pass");

    inputEmail.value = "";
    inputPassword.value= "";
    inputEmail.focus()
}




  /*   console.log(inputPassword);
    console.log(inputEmail);
let user = estudiantes.find((inputEmail, inputPassword)=>{
    if(inputEmail != estudiantes.email &&
    estudiantes.password != inputPassword){
        return;
        
    }else{
        return estudiantes;
    }

    
});
console.log(user);*/