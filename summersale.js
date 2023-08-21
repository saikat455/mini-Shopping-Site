

let total = 0;
let discountAmount = 0;

function handleClickBtn(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.querySelector(".card-title").innerText;
    const itemPrice = parseFloat(target.querySelector("#priceItem").innerText);

    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    total += itemPrice;
    document.getElementById("totalPrice").innerText = total.toFixed(2);

    const applyBtn = document.getElementById("applyBtn");
    if(total >= 200){
        applyBtn.disabled = false;
    }
    else{
        applyBtn.disabled = true;
    }

    updatePurchaseButtonState();
}

document.getElementById("applyBtn").addEventListener("click", function () {
    const couponInput = document.getElementById("couponBox").value;
    if (couponInput === "SELL200") {
        discountAmount = total * 0.20;
        document.getElementById("discount").innerText = discountAmount.toFixed(2);
        total -= discountAmount;
        document.getElementById("total").innerText = total.toFixed(2);
    }
    couponBox.value = ""; 

    updatePurchaseButtonState();
});


function updatePurchaseButtonState(){
    const totalPrice = parseFloat(document.getElementById("totalPrice").innerText);
    const makePurchaseButton = document.getElementById("make-purchase-btn");
    if(totalPrice > 0){
        makePurchaseButton.removeAttribute("disabled");
    }
    else{
        makePurchaseButton.setAttribute("disabled", "disabled");
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const closeModalButton = document.getElementById('closeBtn');
    const totalPriceInput = document.getElementById('totalPrice');
    const discountInput = document.getElementById('discount');
    const totalInput = document.getElementById('total');
    const selectedItemContainer = document.getElementById("selected-items");
    
    const goHomeButtons = document.querySelectorAll('.go-home-button');
    
    closeModalButton.addEventListener('click', function () {
        // after clicking Go Home btn, selected items list will be reset
        totalPriceInput.textContent = '0.00';
        discountInput.textContent = '0.00';
        totalInput.textContent = '0.00';
        total = 0;
        discountAmount = 0;
        updatePurchaseButtonState();
        selectedItemContainer.innerHTML = '';
    });
    
for (const button of goHomeButtons) {
    button.addEventListener('click', function() {
        closeModalButton.click();
    });
}
    updatePurchaseButtonState();
});