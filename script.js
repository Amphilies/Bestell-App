// let dishes = [
//     {
//         "category": "Pizza",
//         "variant": [
//             {
//                 "name": "Margarita",
//                 "ingredients": "Tomatensoße",
//                 "price": 8.50,
//                 "amount": 0,
//             },
//             {
//                 "name": "Tonno",
//                 "ingredients": "Tomatensoße, Thunfisch, Zwiebeln",
//                 "price": 11.50,
//                 "amount": 0,
//             },
//             {
//                 "name": "Funghi",
//                 "ingredients": "Tomatensoße, Champignons",
//                 "price": 11.50,
//                 "amount": 1,
//             },
//             {
//                 "name": "Diavolo (Scharf)",
//                 "ingredients": "Tomatensoße, Salami, Peperonie",
//                 "price": 12.50,
//                 "amount": 0,
//             }
//         ]
//     },
//     {
//         "category": "Pasta",
//         "variant": [
//             {
//                 "name": "Classic",
//                 "ingredients": "Tomatensoße",
//                 "price": 8.50,
//                 "amount": 0,
//             },
//             {
//                 "name": "Bolognese",
//                 "ingredients": "Tomatensoße, Hackfleisch (Rind)",
//                 "price": 10.50,
//                 "amount": 0,
//             },
//             {
//                 "name": "Funghi",
//                 "ingredients": "Sahnecremesoße, Champignons",
//                 "price": 11.50,
//                 "amount": 0,
//             }
//         ]
//     },
//     {
//         "category": "Auflauf",
//         "variant": [
//             {
//                 "name": "Classic",
//                 "ingredients": "Tomatensoße",
//                 "price": 8.50,
//                 "amount": 0,
//             },
//             {
//                 "name": "Tonno",
//                 "ingredients": "Tomatensoße, Thunfisch, Zwiebeln",
//                 "price": 11.50,
//                 "amount": 0,
//             },
//             {
//                 "name": "Funghi",
//                 "ingredients": "Sahnecremesoße, Champignons",
//                 "price": 11.50,
//                 "amount": 0,
//             },
//             {
//                 "name": "Diavolo (Scharf)",
//                 "ingredients": "Tomatensoße, Hackfleisch (Rind), Peperonie",
//                 "price": 12.50,
//                 "amount": 0,
//             }
//         ]
//     },
//     {
//         "category": "Asiatisch",
//         "variant": [
//             {
//                 "name": "Rindfleisch Kun-Bao",
//                 "ingredients": "mit Bambus, frischen Champignons, Paprika, Morcheln, Knoblauch und Hoisin-Sauce, Reis",
//                 "price": 14.50,
//                 "amount": 0,
//             },
//             {
//                 "name": "Ende Süß-Sauer",
//                 "ingredients": "mit Bambus, Ananas, Reis",
//                 "price": 13.50,
//                 "amount": 0,
//             },
//             {
//                 "name": "Curry Rind (leicht scharf)",
//                 "ingredients": "mit Bambus, frischen Champignons, Paprika, Reis",
//                 "price": 11.50,
//                 "amount": 0,
//             },
//             {
//                 "name": "Rindfleisch mit Broccoli",
//                 "ingredients": "mit Broccoli, frischen Champignons, Spargel",
//                 "price": 12.50,
//                 "amount": 0,
//             }
//         ]
//     },
// ]
// let pizza = [
//     {
//         "name": "Margarita",
//         "ingredients": "Tomatensoße",
//         "price": 8.50,
//         "amount": 0,
//     },
//     {
//         "name": "Tonno",
//         "ingredients": "Tomatensoße, Thunfisch, Zwiebeln",
//         "price": 11.50,
//         "amount": 0,
//     },
//     {
//         "name": "Funghi",
//         "ingredients": "Tomatensoße, Champignons",
//         "price": 11.50,
//         "amount": 0,
//     },
//     {
//         "name": "Diavolo (Scharf)",
//         "ingredients": "Tomatensoße, Salami, Peperonie",
//         "price": 12.50,
//         "amount": 0,
//     }
// ]
// let pasta = [
//     {
//                 "name": "Classic",
//                 "ingredients": "Tomatensoße",
//                 "price": 8.50,
//                 "amount": 0,
//     },
//     {
//                 "category": "Pasta",
//                 "name": "Bolognese",
//                 "ingredients": "Tomatensoße, Hackfleisch (Rind)",
//                 "price": 10.50,
//                 "amount": 0,
//     },
//     {
//                 "category": "Pasta",
//                 "name": "Funghi",
//                 "ingredients": "Sahnecremesoße, Champignons",
//                 "price": 11.50,
//                 "amount": 0,
//     },

// ]
// function renderPizza() {
//     let contentPizza = document.getElementById('content_pizza');
//     for (let pizzaIndex = 0; pizzaIndex < pizza.length; pizzaIndex++) {
//         let pizzaPrice = pizza[pizzaIndex].price.toFixed(2);
//         contentPizza.innerHTML +=
//             `
//             <div class="container-food padding-side">
//                 <div class="dish-information">
//                     <h3>${pizza[pizzaIndex].name}</h3>
//                     <p>${pizza[pizzaIndex].ingredients}</p>
//                     <p>${pizzaPrice} €</p>
//                 </div>
//                 <button onclick="addMore(${pizzaIndex})" class="button-add-dish">+</button>
//             </div>
//             `
//     }
// }

// function renderPasta() {
//     let contentPasta = document.getElementById('content_pasta');
//     for (let pastaIndex = 0; pastaIndex < pasta.length; pastaIndex++) {
//         let pastaPrice = pasta[pastaIndex].price.toFixed(2);
//         contentPasta.innerHTML +=
//             `
//             <div class="container-food padding-side">
//                 <div class="dish-information">
//                     <h3>${pasta[pastaIndex].name}</h3>
//                     <p>${pasta[pastaIndex].ingredients}</p>
//                     <p>${pastaPrice} €</p>
//                 </div>
//                 <button onclick="addMore(${pastaIndex})" class="button-add-dish">+</button>
//             </div>
//             `
//     }
// }


// function addMore(index) {


//     pizza[index].amount++;


//     renderCart(index);
//     // console.log(pizza[pizzaIndex].name + " " + pizza[pizzaIndex].amount);

// }

// function renderCart(pizzaIndex) {
//     let contentCart = document.getElementById('content_cart');
//     let pizzaPrice = pizza[pizzaIndex].price.toFixed(2);
//     let pastaPrice = pasta[pizzaIndex].price.toFixed(2);
//     if (pizza[pizzaIndex].amount == 1) {
//         contentCart.innerHTML += `
//         <h4>Pizza ${pizza[pizzaIndex].name}</h4>
//         <div class="warecart-dish-information-small">
//             <div class="warecart-amount-small">
//                 <button class="button-cart-small">-</button>
//                 <p id="test${pizzaIndex}">${pizza[pizzaIndex].amount} x</p>
//                 <button onclick="addMore(${pizzaIndex})" class="button-cart-small">+</button>
//             </div>
//             <div class="warecart-price">
//                 <p>${pizzaPrice} €</p>
//                 <button class="button-cart-small"><img class="icon-trash-small"
//                         src="./img/icons/icon-trash.png" alt=""></button>
//             </div>
//         </div>
//         `
//     }
//     if (pasta[pastaIndex].amount == 1) {
//         contentCart.innerHTML += `
//         <h4>Pizza ${pasta[pastaIndex].name}</h4>
//         <div class="warecart-dish-information-small">
//             <div class="warecart-amount-small">
//                 <button class="button-cart-small">-</button>
//                 <p id="test${pastaIndex}">${pasta[pastaIndex].amount} x</p>
//                 <button onclick="addMore(${pastaIndex})" class="button-cart-small">+</button>
//             </div>
//             <div class="warecart-price">
//                 <p>${pastaPrice} €</p>
//                 <button class="button-cart-small"><img class="icon-trash-small"
//                         src="./img/icons/icon-trash.png" alt=""></button>
//             </div>
//         </div>
//         `
//     }
//     let pizzaAmount = document.getElementById('test' + [pizzaIndex]);
//     let pastaAmount = document.getElementById('test' + [pastaIndex]);
//     pizzaAmount.innerHTML = pizza[pizzaIndex].amount + " x";
//     pastaAmount.innerHTML = pasta[pastaIndex].amount + " x";
// }

let dishes = [
    {
        "category": "Pizza",
        "name": "Margarita",
        "ingredients": "Tomatensoße",
        "price": 8.50,
        "amount": 0,
    },
    {
        "category": "Pizza",
        "name": "Tonno",
        "ingredients": "Tomatensoße, Thunfisch, Zwiebeln",
        "price": 11.50,
        "amount": 0,
    },
    {
        "category": "Pizza",
        "name": "Funghi",
        "ingredients": "Tomatensoße, Champignons",
        "price": 11.50,
        "amount": 0,
    },
    {
        "category": "Pizza",
        "name": "Diavolo (Scharf)",
        "ingredients": "Tomatensoße, Salami, Peperonie",
        "price": 12.50,
        "amount": 0,
    },
    {
        "category": "Pasta",
        "name": "Classic",
        "ingredients": "Tomatensoße",
        "price": 8.50,
        "amount": 0,
    },
    {
        "category": "Pasta",
        "name": "Bolognese",
        "ingredients": "Tomatensoße, Hackfleisch (Rind)",
        "price": 10.50,
        "amount": 0,
    },
    {
        "category": "Pasta",
        "name": "Funghi",
        "ingredients": "Sahnecremesoße, Champignons",
        "price": 11.50,
        "amount": 0,
    },
    {
        "category": "Auflauf",
        "name": "Classic",
        "ingredients": "Tomatensoße",
        "price": 8.50,
        "amount": 0,
    },
    {
        "category": "Auflauf",
        "name": "Tonno",
        "ingredients": "Tomatensoße, Thunfisch, Zwiebeln",
        "price": 11.50,
        "amount": 0,
    },
    {
        "category": "Auflauf",
        "name": "Funghi",
        "ingredients": "Sahnecremesoße, Champignons",
        "price": 11.50,
        "amount": 0,
    },
    {
        "category": "Auflauf",
        "name": "Diavolo (Scharf)",
        "ingredients": "Tomatensoße, Hackfleisch (Rind), Peperonie",
        "price": 12.50,
        "amount": 0,
    },
    {
        "category": "Asiatisch",
        "name": "Rindfleisch Kun-Bao",
        "ingredients": "mit Bambus, frischen Champignons, Paprika, Morcheln, Knoblauch und Hoisin-Sauce, Reis",
        "price": 14.50,
        "amount": 0,
    },
    {
        "category": "Asiatisch",
        "name": "Ende Süß-Sauer",
        "ingredients": "mit Bambus, Ananas, Reis",
        "price": 13.50,
        "amount": 0,
    },
    {
        "category": "Asiatisch",
        "name": "Curry Rind (leicht scharf)",
        "ingredients": "mit Bambus, frischen Champignons, Paprika, Reis",
        "price": 11.50,
        "amount": 0,
    },
    {
        "category": "Asiatisch",
        "name": "Rindfleisch mit Broccoli",
        "ingredients": "mit Broccoli, frischen Champignons, Spargel",
        "price": 12.50,
        "amount": 0,
    }
]



function init() {
    renderDishes();
}

function renderDishes() {
    let contentPizza = document.getElementById('content_pizza');
    let contentPasta = document.getElementById('content_pasta');
    let contentCasserole = document.getElementById('content_casserole');
    let contentAsia = document.getElementById('content_asia');

    for (let dishesIndex = 0; dishesIndex < 4; dishesIndex++) {
        let currentIndex = dishes[dishesIndex];
        let pizzaPrice = currentIndex.price;
        pizzaPrice = pizzaPrice.toFixed(2);
        contentPizza.innerHTML += getPizzaElement(currentIndex, pizzaPrice, dishesIndex);

    }

    for (let dishesIndex = 4; dishesIndex < 7; dishesIndex++) {
        let currentIndex = dishes[dishesIndex];
        let pastaPrice = currentIndex.price;
        pastaPrice = pastaPrice.toFixed(2);
        contentPasta.innerHTML += getPastaElement(currentIndex, pastaPrice, dishesIndex);

    }
    for (let dishesIndex = 7; dishesIndex < 11; dishesIndex++) {
        let currentIndex = dishes[dishesIndex];
        let casserolePrice = currentIndex.price;
        casserolePrice = casserolePrice.toFixed(2);
        contentCasserole.innerHTML += getCasseroleElement(currentIndex, casserolePrice, dishesIndex);

    }
    for (let dishesIndex = 11; dishesIndex < dishes.length; dishesIndex++) {
        let currentIndex = dishes[dishesIndex];
        let asiaPrice = currentIndex.price;
        asiaPrice = asiaPrice.toFixed(2);
        contentAsia.innerHTML += getAsiaElement(currentIndex, asiaPrice, dishesIndex);

    }
}
function renderCart(dishesIndex) {
    let contentCart = document.getElementById('content_cart');
    let currentIndex = dishes[dishesIndex];
    let dishesPrice = currentIndex.price;
    dishesPrice = dishesPrice.toFixed(2);

    if (currentIndex.amount == 1) {
        contentCart.innerHTML += getCartElement(currentIndex, dishesPrice, dishesIndex);

    }

    let dishesAmount = document.getElementById('amount' + [dishesIndex]);
    let foodPrice = document.getElementById('food_price' + [dishesIndex]);
    let fixedPrice = currentIndex.amount * currentIndex.price;

    if (currentIndex.amount >= 1) {
        dishesAmount.innerHTML = currentIndex.amount + " x";
        foodPrice.innerHTML = fixedPrice.toFixed(2);
    }

    // calculateOrder(dishesIndex);
}


function addItem(index) {
    dishes[index].amount++;
    renderCart(index);
}
function removeCart(index) {
    let currentIndex = dishes[index];
    if (currentIndex.amount > 0) {
        currentIndex.amount--;
        let dishesAmount = document.getElementById('amount' + [index]);
        dishesAmount.innerHTML = currentIndex.amount + " x";
    }
    if (currentIndex.amount == 0) {
        currentIndex.amount = 0;
        deleteItem(index);
        renderCart(index);
    }
}
function deleteItem(dishesIndex) {
    var element = document.getElementById('order' + dishesIndex); // will return element
    element.parentNode.removeChild(element); // will remove the element from DOM
}


function toggleWareCart() {
    let cartSmall = document.getElementById('toggle_warecart');
    cartSmall.classList.toggle('container-warecart-small');
}

function calcOrderSummeray(test) {
    let contentOrderPrice = document.getElementById('content_order_price');
    let fix;
    let aaa = " + ";
    fix += test;
    fix = parseFloat(test);
    let bbb = fix + aaa;
    

    console.log(bbb);
    

    // Ausgabe
    contentOrderPrice.innerHTML += fix.toFixed(2);
}



function calculateOrder(dishesIndex) {
    let contentOrderPrice = document.getElementById('content_order_price');
    let contentCart = document.getElementById('content_cart');
    let foodPrice = document.getElementById('food_price' + [dishesIndex]);
    let foodPrice0 = parseFloat(document.getElementById('food_price0').innerText);
    let foodPrice1 = parseFloat(document.getElementById('food_price1').innerText);
    let foodPrice2 = parseFloat(document.getElementById('food_price2').innerText);
    let foodPrice3 = parseFloat(document.getElementById('food_price3').innerText);
    let foodPrice4 = parseFloat(document.getElementById('food_price4').innerText);
    let foodPrice5 = parseFloat(document.getElementById('food_price5').innerText);
    let foodPrice6 = parseFloat(document.getElementById('food_price6').innerText);
    let foodPrice7 = parseFloat(document.getElementById('food_price7').innerText);
    let foodPrice8 = parseFloat(document.getElementById('food_price8').innerText);
    let foodPrice9 = parseFloat(document.getElementById('food_price9').innerText);
    let foodPrice10 = parseFloat(document.getElementById('food_price10').innerText);
    let foodPrice11 = parseFloat(document.getElementById('food_price11').innerText);
    let foodPrice12 = parseFloat(document.getElementById('food_price12').innerText);
    let foodPrice13 = parseFloat(document.getElementById('food_price13').innerText);
    let foodPrice14 = parseFloat(document.getElementById('food_price14').innerText);
    let foodPriceRes = foodPrice0 + foodPrice1 + foodPrice2 + foodPrice3 + foodPrice4 + foodPrice5 + foodPrice6 + foodPrice7 + foodPrice8 + foodPrice9 + foodPrice10 + foodPrice11 + foodPrice12 + foodPrice13 + foodPrice14;



    console.log(foodPriceRes);

    contentOrderPrice.innerHTML = foodPriceRes;
}