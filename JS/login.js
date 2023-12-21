let btnIngresar = document.getElementById("btnIniciar");


let estudiantes = [
    {name: "Felipe", email: "felipe@gmail.com", password: "123456"},
    {name: "Juan", email: "juan@gmail.com", password: "123456"},
    {name: "Pedro", email: "Pedro@gmail.com", password: "123456"},
]

function checkLogin (){
    
let inputEmail = document.getElementById("email").value;
let inputPassword = document.getElementById("pass").value;

let errorEmail = document.getElementById("error");

estudiantes.forEach((estudiante)=>{

    if (inputEmail == estudiante.email && inputPassword == estudiante.password){
        sessionStorage.setItem("Nombre", estudiante.name);
        window.location.assign('./html/incio.html')
        }
        else if(inputEmail != estudiante.email || inputPassword != estudiante.password){
        
            errorEmail.innerText ="Correo y/o contraseña incorrecta";
            limpiarFormulario ()
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