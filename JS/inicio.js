let genero = sessionStorage.getItem("Genero")
if (genero === "m"){
    document.body.classList.add("masculino")
    document.body.classList.remove("femenino")
}
if(genero === "f"){
    document.body.classList.add("femenino")
    document.body.classList.remove("masculino")
}

let imgenesMasculinas = ["pizza.jpg", "pizza2.jpg", "pizza3.jpg", "pizza4.jpg"]
let ruta = "../img/"

let classImages= document.getElementsByClassName("imagen")

let i = 0;

for (img of classImages){
    //console.log(img); elemento de html
    img.src = ruta+imgenesMasculinas[i];
    i++;
};
