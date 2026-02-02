function init() {
    renderDishes();
    getFromLocalStorage();
    renderBasket();
}

function renderDishes() {
    let contentDishesPizzaRef = document.getElementById("container_dishes_pizza");
    let contentDishescasseroleRef = document.getElementById("container_dishes_casserole");
    let contentDishesPastaRef = document.getElementById("container_dishes_pasta");
    let contentDishesAsiaRef = document.getElementById("container_dishes_asia");


    for (let dishIndex = 0; dishIndex < dishes.length; dishIndex++) {
        let dishesPrice = dishes[dishIndex].price.toFixed(2);

        if (dishes[dishIndex].food == "Pizza") {
            contentDishesPizzaRef.innerHTML += getElementRenderPizza(dishIndex, dishesPrice);
        }
        if (dishes[dishIndex].food == "Casserole") {
            contentDishescasseroleRef.innerHTML += getElementRenderCasserole(dishIndex, dishesPrice);
        }
        if (dishes[dishIndex].food == "Pasta") {
            contentDishesPastaRef.innerHTML += getElementRenderPasta(dishIndex, dishesPrice);
        }
        if (dishes[dishIndex].food == "Asia") {
            contentDishesAsiaRef.innerHTML += getElementRenderAsia(dishIndex, dishesPrice);
        }
    }
}
function renderBasket() {
    let contentBasketRef = document.getElementById("container_basket");
    contentBasketRef.innerHTML = "";
    for (let basketIndex = 0; basketIndex < dishes.length; basketIndex++) {
        let fullAmountPrice = dishes[basketIndex].price * dishes[basketIndex].amount;
        let foodPrice = fullAmountPrice.toFixed(2);
        if (dishes[basketIndex].amount > 0) {
            contentBasketRef.innerHTML += getElementRenderBasket(basketIndex, foodPrice);
        }
    }
    calculateBasket();
}


function addDishToBasket(dishIndex) {
    let dishAmount = dishes[dishIndex];
    dishAmount.amount++;
    renderBasket();
    saveToLocalStorage();
}
function increaseBasketAmount(basketIndex) {
    let dishAmount = dishes[basketIndex];
    dishAmount.amount++;
    renderBasket();
    saveToLocalStorage();
}
function reduceBasketAmount(basketIndex) {
    let dishAmount = dishes[basketIndex];
    dishAmount.amount--;
    renderBasket();
    saveToLocalStorage();
}
function deleteBasket(basketIndex) {
    let dishAmount = dishes[basketIndex];
    dishAmount.amount = 0;
    renderBasket();
    saveToLocalStorage();
}


function saveToLocalStorage() {
    localStorage.setItem("dishes", JSON.stringify(dishes));
}
function getFromLocalStorage() {
    let dishesArr = JSON.parse(localStorage.getItem("dishes"))
    if (localStorage.getItem('dishes') == null) {
        saveToLocalStorage();
    }

    dishes = dishesArr;
}


function optionDeliver(dc) {
    let deliverCost = document.getElementById("delivercost");
    let buttonPickUp = document.getElementById("btn_pickup");
    let buttonDeliver = document.getElementById("btn-deliver");
    if (dc == 5) {
        deliverCost.innerHTML = "5.00";
        buttonPickUp.classList.remove("button-active");
        buttonDeliver.classList.add("button-active");
    }
    if (dc == 0) {
        deliverCost.innerHTML = "0.00";
        buttonPickUp.classList.add("button-active");
        buttonDeliver.classList.remove("button-active");
    }
    renderBasket()
}

function toggleBasketResponsive() {
    let toggleBasket = document.getElementById("content_basket");
    let contentBasket = document.getElementById("container_basket");
    let contentTotal = document.getElementById("content_total");
    let btnSendOrder = document.getElementById("btn_send_order");
    contentTotal.classList.toggle("display");
    contentBasket.classList.toggle("display");
    toggleBasket.classList.toggle("display");
    btnSendOrder.classList.toggle("display");
}

function calculateBasket() {
    let subResult = 0;
    let test;

    test = parseFloat(document.getElementById("delivercost").innerHTML);
    for (let calcIndex = 0; calcIndex < dishes.length; calcIndex++) {
        if (dishes[calcIndex].amount >= 1) {
            subResult += dishes[calcIndex].amount * dishes[calcIndex].price;
        }
    }

    subTotal = subResult;
    total = subResult + test;

    upDateBasket(subTotal, total);
}
function upDateBasket(subTotal, total) {
    document.getElementById("subTotal").innerHTML = subTotal.toFixed(2);
    document.getElementById("total").innerHTML = total.toFixed(2);
}

function toggleDropMenuBox() {
    let menuBox = document.getElementById("menu_box");
    menuBox.classList.toggle("menu-box-transform");

    setTimeout(() => {
        menuBox.classList.add("menu-box-transform");
     }, 5000);
}
function closeDropMenuBox() {
    let menuBox = document.getElementById("menu_box");
    menuBox.classList.add("menu-box-transform");
}