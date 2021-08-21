// using function update all cost value

function inputProperties(button, cost) {
    const inputCost = document.getElementById(button);
    const totalCostText = inputCost.innerText;
    let totalCost = parseInt(totalCostText);
    totalCost = cost;
    inputCost.innerText = totalCost;
    totalPrice();
}


// Total price counting 

function totalPrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    const inputTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    inputTotalPrice.innerText = totalPrice;

    const discountPrice = document.getElementById('discount-price');
    discountPrice.innerText = totalPrice;


}

// count for extra memory 

document.getElementById('mbtn-two').addEventListener('click', function () {
    // const inputMemoryCost = document.getElementById('memory-cost');

    // const memoryCostText = inputMemoryCost.innerText;
    // let memoryCost = parseInt(memoryCostText);
    // memoryCost = 180;
    // inputMemoryCost.innerText = memoryCost;
    //document.getElementById("mbtn-two").disabled = true;
    inputProperties('memory-cost', 180);

});

document.getElementById('mbtn-one').addEventListener('click', function () {
    // const inputMemoryCost = document.getElementById('memory-cost');

    // const memoryCostText = inputMemoryCost.innerText;
    // let memoryCost = parseInt(memoryCostText);
    // memoryCost = 0;
    // inputMemoryCost.innerText = memoryCost;
    // document.getElementById("mbtn-two").disabled = false;
    inputProperties('memory-cost', 0);

});




// count for extra SSD  storage 


document.getElementById('sbtn-two').addEventListener('click', function () {
    // const inputStorageCost = document.getElementById('storage-cost');
    // const storageCostText = inputStorageCost.innerText;
    // let storageCost = parseInt(storageCostText);
    // storageCost = 100;
    // inputStorageCost.innerText = storageCost;
    //document.getElementById("sbtn-two").disabled = true;
    inputProperties('storage-cost', 100);

});
document.getElementById('sbtn-three').addEventListener('click', function () {
    // const inputStorageCost = document.getElementById('storage-cost');
    // const storageCostText = inputStorageCost.innerText;
    // let storageCost = parseInt(storageCostText);
    // storageCost = 180;
    // inputStorageCost.innerText = storageCost;
    //document.getElementById("sbtn-three").disabled = true;
    inputProperties('storage-cost', 180);

});
document.getElementById('sbtn-one').addEventListener('click', function () {
    // const inputStorageCost = document.getElementById('storage-cost');
    // const storageCostText = inputStorageCost.innerText;
    // let storageCost = parseInt(storageCostText);
    // storageCost = 0;
    // inputStorageCost.innerText = storageCost;
    //document.getElementById("sbtn-two").disabled = true;
    inputProperties('storage-cost', 0);

});

// delivery charge count

document.getElementById('dbtn-one').addEventListener('click', function () {

    // const inputDeliceryCost = document.getElementById('delivery-cost');
    // const deliveryCostText = inputDeliceryCost.innerText;
    // let deliveryCost = parseInt(deliveryCostText);
    // deliveryCost = 0;
    // inputDeliceryCost.innerText = deliveryCost;

    inputProperties('delivery-cost', 0);
});

document.getElementById('dbtn-two').addEventListener('click', function () {

    // const inputDeliceryCost = document.getElementById('delivery-cost');
    // const deliveryCostText = inputDeliceryCost.innerText;
    // let deliveryCost = parseInt(deliveryCostText);
    // deliveryCost = 20;
    // inputDeliceryCost.innerText = deliveryCost;
    inputProperties('delivery-cost', 20);
})



// promocode  implement 

document.getElementById('promo-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code');
    const enteredPromocode = promoCode.value;

    const calculatedDiscountPrice = document.getElementById('discount-price');
    const discountPriceText = calculatedDiscountPrice.innerText;
    const discountPrice = parseFloat(discountPriceText);

    if (enteredPromocode == 'stevekaku') {
        let totalDiscountPrice = discountPrice - discountPrice * 0.2;

        calculatedDiscountPrice.innerText = totalDiscountPrice;
        promoCode.value = '';
        document.getElementById("promo-btn").disabled = true;
    }
})

