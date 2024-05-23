const fruits = [
    {
        name: "Apple",
        price: 1.2,
        season: "Fall",
        images: ["image-apple-1.jpg", "image-apple-2.jpg"]
    },
    {
        name: "Banana",
        price: 0.5,
        season: "Year-round",
        images: ["image-banana-1.jpg", "image-banana-2.jpg"]
    },
    {
        name: "Orange",
        price: 0.8,
        season: "Winter",
        images: ["image-orange-1.jpg", "image-orange-2.jpg"]
    },
    {
        name: "Strawberry",
        price: 2.0,
        season: "Spring",
        images: ["image-strawberry-1.jpg", "image-strawberry-2.jpg"]
    }
]

var index = 0

function renderFruit(){
    fruits.forEach((fruit, index) => {
        productsElement.innerHTML += `
        <div class="card m-2" style="max-width: 350px;">
            <div class="row g-0">
            <div class="col-md-5">
                <img id="${index}" src="images/${fruit.images[0]}" class="img-fluid rounded-start" alt="fruit-image" onclick="changeImg(${index})">
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
    })
}

function changeImg(id) {
    document.getElementById(id).src = "images/"+fruits[id].images[1];   
}


const productsElement = document.querySelector("[data-products]")
window.addEventListener("DOMContentLoaded", renderFruit())
