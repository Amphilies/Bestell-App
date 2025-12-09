function getPizzaElement(currentIndex, pizzaPrice, dishesIndex) {
    return `
            <div class="container-food padding-side">
                <div class="dish-information">
                    <h3>${currentIndex.name}</h3>
                    <p>${currentIndex.ingredients}</p>
                    <p>${pizzaPrice} €</p>
                </div>
                <button onclick="addItem(${dishesIndex}); calcOrderSummeray(${pizzaPrice})" class="button-add-dish">+</button>
            </div>
            `
}
function getPastaElement(currentIndex, pastaPrice, dishesIndex) {
    return `
            <div class="container-food padding-side">
                <div class="dish-information">
                    <h3>${currentIndex.name}</h3>
                    <p>${currentIndex.ingredients}</p>
                    <p>${pastaPrice} €</p>
                </div>
                <button onclick="addItem(${dishesIndex}); calcOrderSummeray(${pastaPrice})" class="button-add-dish">+</button>
            </div>
            `
}
function getCasseroleElement(currentIndex, casserolePrice, dishesIndex) {
    return `
            <div class="container-food padding-side">
                <div class="dish-information">
                    <h3>${currentIndex.name}</h3>
                    <p>${currentIndex.ingredients}</p>
                    <p>${casserolePrice} €</p>
                </div>
                <button onclick="addItem(${dishesIndex}); calcOrderSummeray(${casserolePrice})" class="button-add-dish">+</button>
            </div>
            `
}
function getAsiaElement(currentIndex, asiaPrice, dishesIndex) {
    return `
            <div class="container-food padding-side">
                <div class="dish-information">
                    <h3>${currentIndex.name}</h3>
                    <p>${currentIndex.ingredients}</p>
                    <p>${asiaPrice} €</p>
                </div>
                <button onclick="addItem(${dishesIndex}); calcOrderSummeray(${asiaPrice})" class="button-add-dish">+</button>
            </div>
            `
}

function getCartElement(currentIndex, dishesPrice, dishesIndex) {
    return `
        <div id="order${dishesIndex}">
            <h4>${currentIndex.category} ${currentIndex.name}</h4>
            <div class="warecart-dish-information-small">
                <div class="warecart-amount-small">
                    <button onclick="removeCart(${dishesIndex})" class="button-cart">-</button>
                    <p id="amount${dishesIndex}">${currentIndex.amount} x</p>
                    <button onclick="addItem(${dishesIndex}); calcOrderSummeray(${dishesPrice})" class="button-cart">+</button>
                </div>
                <div class="warecart-price">
                    <div id="food_price${dishesIndex}">${dishesPrice} <span>€</span></div>
                    <button class="button-cart" onclick="deleteItem(${dishesIndex})"><img class="icon-trash"
                            src="./img/icons/icon-trash.png" alt=""></button>
                </div>
            </div>
        </div>
        `
}