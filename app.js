const fruits = [
    {
        name: "Apple",
        price: 1.2,
        season: "Fall",
        images: ["image-apple-1.png", "image-apple-2.png"]
    },
    {
        name: "Banana",
        price: 0.5,
        season: "Year-round",
        images: ["image-banana-1.png", "image-banana-2.png"]
    },
    {
        name: "Orange",
        price: 0.8,
        season: "Winter",
        images: ["image-orange-1.png", "image-orange-2.png"]
    },
    {
        name: "Strawberry",
        price: 2.0,
        season: "Spring",
        images: ["image-strawberry-1.png", "image-strawberry-2.png"]
    }
]

var contador = 0;

function renderFruit(){
    fruits.forEach((fruit, index) => {
        productsElement.innerHTML += `
        <div class="card m-2" style="max-width: 350px;">
            <div class="row g-0">
            <div class="col-md-5">
                <img id="img${contador}" src="images/${fruit.images[0]}" class="img-fluid rounded-start" alt="fruit-image" onclick="changeImg(${contador})">
            </div>
            <div class="col-md-4 d-flex align-items-center">
                <div class="card-body">
                <h5 class="card-title">${fruit.name}</h5>
                <h4 class="card-text">${fruit.price}€/Kg</h4>
                <p class="card-text">${fruit.season}</p>
                </div>
            </div>
            </div>
        </div>
        `
        contador++;
    })
}

function changeImg(id) {
  /*-----------------------------------------------------------------------------
    CAMBIAR LA RUTA POR LA DEL ORDENADOR QUE LO VISUALICE. UTILIZAR EL ALERT PARA AVERIGUARLA
  ------------------------------------------------------------------------------
  */
  var ruta = "images/"+fruits[id].images[0]; 
//   alert(document.getElementById("img"+id).src);
    if (document.getElementById("img"+id).src == ruta){
      document.getElementById("img"+id).src = "images/"+fruits[id].images[1];   
    } else{
      document.getElementById("img"+id).src = "images/"+fruits[id].images[0]; 
    }
}


const productsElement = document.querySelector("[data-products]")
window.addEventListener("DOMContentLoaded", renderFruit())
