function getElementRenderPizza(dishIndex, dishesPrice) {
    return `
        <div class="container-food">
            <div class="container-food-information">
                <h3>Pizza ${dishes[dishIndex].name}</h3>
                <p>${dishes[dishIndex].ingredients}</p>
                <h3>${dishesPrice} €</h3>
            </div>
            <div class="container-add-food">
                <span onclick="addDishToBasket(${dishIndex})" class="add-food">+</span>
            </div>
        </div>`
}
function getElementRenderCasserole(dishIndex, dishesPrice) {
    return `
        <div class="container-food">
            <div class="container-food-information">
                <h3>Auflauf ${dishes[dishIndex].name}</h3>
                <p>${dishes[dishIndex].ingredients}</p>
                <h3>${dishesPrice} €</h3>
            </div>
            <div class="container-add-food">
                <span onclick="addDishToBasket(${dishIndex})" class="add-food">+</span>
            </div>
        </div>`
}
function getElementRenderPasta(dishIndex, dishesPrice) {
    return `
        <div class="container-food">
            <div class="container-food-information">
                <h3>Pasta ${dishes[dishIndex].name}</h3>
                <p>${dishes[dishIndex].ingredients}</p>
                <h3>${dishesPrice} €</h3>
            </div>
            <div class="container-add-food">
                <span onclick="addDishToBasket(${dishIndex})" class="add-food">+</span>
            </div>
        </div>`
}
function getElementRenderAsia(dishIndex, dishesPrice) {
    return `
        <div class="container-food">
            <div class="container-food-information">
                <h3>Asia ${dishes[dishIndex].name}</h3>
                <p>${dishes[dishIndex].ingredients}</p>
                <h3>${dishesPrice} €</h3>
            </div>
            <div class="container-add-food">
                <span onclick="addDishToBasket(${dishIndex})" class="add-food">+</span>
            </div>
        </div>`
}

function getElementRenderBasket(basketIndex, foodPrice) {
    return`
        <h4 class="basket-dish-topic">${dishes[basketIndex].food} ${dishes[basketIndex].name}</h4>
        <div class="basket">
            <div class="container-amount">
                <img onclick="reduceBasketAmount(${basketIndex})" class="change-amount" src="./img/icons/minus.jpg" alt="">
                <div>${dishes[basketIndex].amount}x</div>
                <img onclick="increaseBasketAmount(${basketIndex})" class="change-amount" src="./img/icons/plus.jpg" alt="">
            </div>
            <div class="container-order">
                <div class="content-food-price">${foodPrice}€</div>
                <div><img onclick="deleteBasket(${basketIndex})" class="trash-img" src="./img/icons/icon-trash.png" alt=""></div>
            </div>
        </div>`
}
