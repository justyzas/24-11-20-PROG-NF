
// JSON - JavaScript Object Notation
// JavaScript objektų notacija

// const staciakampis = {
//     plotis: 45,
//     aukstis: 100,
//     spalva: "Juoda",
//     kampai: ["A", "B", "C", "D"]
// };//Object


// console.log(staciakampis);

// staciakampis.plotis += 5;
// staciakampis.aukstis = 50;
// staciakampis.spalva = "mėlyna";

// console.log(staciakampis.kampai.includes("D"));

const dataSet = [
    {
        src: "https://istore.lt/media/catalog/product/cache/1/image/800x/602f0fa2c1f0d1ba5e241f914e856ff9/m/u/muw23-beats-solo-4-matt-4.jpeg",
        title: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation and up to 20 hours of battery life.",
        price: 79.99,
        discount: 10
    },
    {
        src: "https://m.media-amazon.com/images/I/61x9KMaUoML.jpg",
        title: "Smartphone Stand",
        description: "Adjustable smartphone stand with a sleek design, perfect for hands-free video calls and streaming.",
        price: 15.49,
        discount: 0
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbi_C4r1UqpmdNSxlQI4xYZGujLjFZ2kwwg&s",
        title: "Reusable Water Bottle",
        description: "Stainless steel water bottle with double insulation, keeps beverages cold for 24 hours or hot for 12 hours.",
        price: 99.99,
        discount: 10
    }
];



// 1 Būdas: daryti ciklą ir generuoti HTML tekstą

function generuotiNuolaidosIrKainosElementa(nuolaida, kaina)
{
    if(nuolaida==0)
        return `<p class="price">${kaina.toFixed(2)}€</p>`;
    let kainaSuNuolaida = kaina - kaina * nuolaida / 100;
    return `<p class="price disabled">${kaina.toFixed(2)}€</p>
    <p class="discount">${kainaSuNuolaida.toFixed(2)}€</p>`
}

let visuProduktuHTML = "";

for(let i = 0; i < dataSet.length; i++)
{
    visuProduktuHTML+=`<div class="product">
            <div class="img-container">
                <img src=${dataSet[i].src} alt="">
            </div>
            <div class="details">
                <h3>${dataSet[i].title}</h3>
                <p>${dataSet[i].description}</p>
            </div>
            <div class="actions">
                ${generuotiNuolaidosIrKainosElementa(dataSet[i].discount, dataSet[i].price)}
                <button class="btn buy-btn w-2/3">Pirkti</button>
                <button class="btn w-2/3 add-to-cart">Pridėti į krepšelį</button>
            </div>
        </div>`
}

const productsElement  = document.querySelector("#products");
productsElement.innerHTML = visuProduktuHTML;

console.log(visuProduktuHTML);