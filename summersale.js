
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

  if (total >= 200) {
    document.getElementById("applyBtn").disabled = false;
  }

  
  if (total > 0) {
    document.getElementById("make-purchase-btn").disabled = false;
  }
}

document.getElementById("applyBtn").addEventListener("click", function () {
  const couponInput = document.getElementById("couponBox").value;
  if (couponInput === "SELL200") {
    discountAmount = total * 0.20;
    document.getElementById("discount").innerText = discountAmount.toFixed(2);
    total -= discountAmount;
    document.getElementById("total").innerText = total.toFixed(2);
  }
});

document.getElementById("make-purchase-btn").addEventListener("click", function () {
  if (total > 0) {
    newModal.showModal();
  } 
});

document.getElementById("go-home").addEventListener("click", function () {
  total = 0;
  discountAmount = 0;
  document.getElementById("totalPrice").innerText = "0.00";
  document.getElementById("discount").innerText = "0.00";
  document.getElementById("total").innerText = "0.00";

  const selectedItemContainer = document.getElementById("selected-items");
  selectedItemContainer.innerHTML = "";

  document.getElementById("make-purchase-btn").disabled = true;
});







