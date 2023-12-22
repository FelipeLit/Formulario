let genero = sessionStorage.getItem("Genero");

let ruta = "../img/"

let classImages= document.getElementsByClassName("imagen");



if (genero === "m"){
    document.body.classList.add("masculino")
    document.body.classList.remove("femenino")
    let imgenesMasculinas = ["pizza.jpg", "pizza2.jpg", "pizza3.jpg", "pizza4.jpg"]
    
    let i = 0;
    for (img of classImages){
        //console.log(img); elemento de html
        img.src = ruta+imgenesMasculinas[i];
        i++;
    };
}

if(genero === "f"){
    document.body.classList.add("femenino");
    document.body.classList.remove("masculino");

    let imgenesFemeninas = ["mujer1.jpg", "mujer2.jpg", "mujer3.jpg", "mujer4.jpg"]
    let j = 0;

    for(img of classImages){
        img.src = ruta+imgenesFemeninas[j];
        j++;
    }
}

