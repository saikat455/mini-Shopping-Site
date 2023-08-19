// let total = 0;
// let discountApplied = false;

// function handleClickBtn(target) {
//     const selectedItem = document.getElementById("selected-items");
//     const itemName = target.querySelector(".card-title").innerText;
//     const itemPrice = parseFloat(target.querySelector("#priceItem").innerText);
//     const p = document.createElement("p");
//     p.innerText = itemName;
//     selectedItem.appendChild(p);
//     total= total + itemPrice;
//     document.getElementById("totalPrice").innerText = total.toFixed(2);

//     updateTotalPriceAndDiscount();
// }

// function updateTotalPriceAndDiscount() {
//     const applyButton = document.getElementById("apply");
//     const totalPrice = document.getElementById("totalPrice");
//     const discountValue = document.getElementById("discount");
//     const totalValue = document.getElementById("total");
  
//     if (total >= 200 && !discountApplied) {
//       applyButton.disabled = false;
//     } else {
//       applyButton.disabled = true;
//     }
  
//     let discount = 0;
//     if (discountApplied) {
//         discount = total * 0.20;
//       }
      
//       discountValue.innerText = discount.toFixed(2);
      
//       const finalTotal = total - discount;
//       totalValue.innerText = finalTotal.toFixed(2);
//     }
    
//     document.getElementById("apply").addEventListener("click", function() {
//       discountApplied = true;
//       updateTotalPriceAndDiscount();
//     });

// let total = 0;
// let discountAmount = 0;

// function handleClickBtn(target) {
//   const selectedItemContainer = document.getElementById("selected-items");
//   const itemName = target.querySelector(".card-title").innerText;
//   const itemPrice = parseFloat(target.querySelector("#priceItem").innerText);
  
//   const li = document.createElement("li");
//   li.innerText = itemName;
//   selectedItemContainer.appendChild(li);
  
//   total += itemPrice;
//   document.getElementById("totalPrice").innerText = total.toFixed(2);
  
//   if (total >= 200) {
//     document.getElementById("applyButton").disabled = false;
//   }
// }

// document.getElementById("applyButton").addEventListener("click", function() {
//   const couponInput = document.getElementById("couponInput").value;
//   if (couponInput === "SELL200") {
//     discountAmount = total * 0.20;
//     document.getElementById("discount").innerText = discountAmount.toFixed(2);
//     total -= discountAmount;
//     document.getElementById("total").innerText = total.toFixed(2);
//   }
// });

// let total = 0;
// let orderCount = 1;
// let discountAmount = 0;

// function handleClickBtn(target) {
//   const selectedItemContainer = document.getElementById("selected-items");
//   const itemName = target.querySelector(".card-title").innerText;
//   const itemPrice = parseFloat(target.querySelector("#priceItem").innerText);
  
//   const li = document.createElement("li");
//   li.innerText = `${orderCount}. ${itemName}`;
//   selectedItemContainer.appendChild(li);
  
//   total += itemPrice;
//   document.getElementById("totalPrice").innerText = total.toFixed(2);
  
//   orderCount++;
  
//   if (total >= 200) {
//     document.getElementById("applyButton").disabled = false;
//   }
// }

// document.getElementById("applyButton").addEventListener("click", function() {
//   const couponInput = document.getElementById("couponInput").value;
//   if (couponInput === "SELL200") {
//     discountAmount = total * 0.20;
//     document.getElementById("discount").innerText = discountAmount.toFixed(2);
//     total -= discountAmount;
//     document.getElementById("total").innerText = total.toFixed(2);
//   }
// });

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
}

document.getElementById("applyBtn").addEventListener("click", function() {
  const couponInput = document.getElementById("couponBox").value;
  if (couponInput === "SELL200") {
    discountAmount = total * 0.20;
    document.getElementById("discount").innerText = discountAmount.toFixed(2);
    total -= discountAmount;
    document.getElementById("total").innerText = total.toFixed(2);
  }
});

document.getElementById("totalPrice").addEventListener("click", function() {
    const makePurchaseButton = document.getElementById("make-purchase-btn");
    if (total > 0) {
      makePurchaseButton.disabled = false;
    } else {
      makePurchaseButton.disabled = true;
    }
  });
  document.getElementById("make-purchase-btn").addEventListener("click", function () {
    newModal.showModal();
  });

