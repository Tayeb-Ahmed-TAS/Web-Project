// Change Subtotal and Total Price in Cart

let price_per_good = 74;
let inti_shipping_fee = 25;
let unit_price = document.querySelectorAll(".unitPrice");
let quantity = document.querySelectorAll(".qInp input");
let sub_total = document.querySelectorAll(".subTotal");
let coupon_input = document.querySelector("#coupon div input");
let coupon_btn = document.querySelector("#coupon div button");

let invalid_coupon_msg = document.querySelector(".inv_cpn");

let total_proceed_price = document.querySelector("#cartSubtotal");
let shipping_fee = document.querySelector("#shipping_fee");
let final_total_price = document.querySelector("#cartTotalPrice");
let discount_field = document.querySelector("#discount");

shipping_fee.innerText = "$" + inti_shipping_fee.toFixed(2);

// Set the unit price for each item

unit_price.forEach((price) => {
  price.innerText = "$" + price_per_good.toFixed(2);
});

// Set Initial Subtotal Prices

sub_total.forEach((sub) => {
  sub.innerText = "$" + price_per_good.toFixed(2);
});

// Change Subtotal Price on Quantity Change

for (qnt of quantity) {
  qnt.addEventListener("change", function () {
    if (this.value < 1) {
      this.value = 1;
    }
    let parent = this.closest("tr");
    let sub_total_price = parent.querySelector(".subTotal");
    let new_sub_total = price_per_good * parseInt(this.value);
    sub_total_price.innerText = "$" + new_sub_total.toFixed(2);
    updateTotalPrice();
  });
}

// Update Total Price Function

function updateTotalPrice() {
  let total_price = 0;
  sub_total.forEach((sub) => {
    total_price += parseFloat(sub.innerText.replace("$", ""));
  });
  total_proceed_price.innerText = "$" + total_price.toFixed(2);
  final_total_price.innerText =
    "$" +
    (total_price + parseFloat(shipping_fee.innerText.replace("$", ""))).toFixed(
      2
    );
}

// Initial total_proceed_price and final_total_price setup

updateTotalPrice();

// Apply Coupon Code

let couponcode = [
  "DISCOUNT10",
  "CODESURGEONS",
  "SAVE70",
  "FAMILY5",
  "WELCOME7",
  "FREESHIP",
];

let applied_coupons = [0.1, 0.2, 0.7, 0.05, 0.07]; // Corresponding discount rates

coupon_btn.addEventListener("click", function () {
  let coupon_code = coupon_input.value.trim();
  let total_price = parseFloat(total_proceed_price.innerText.replace("$", ""));
  let coupon_index = couponcode.indexOf(coupon_code);
  if (coupon_index !== -1 && coupon_index !== couponcode.length - 1) {
    let discount_rate = applied_coupons[coupon_index];
    let discount_amount = total_price * discount_rate;
    let new_total_price = total_price - discount_amount;
    discount_field.innerText = "-$" + discount_amount.toFixed(2);
    final_total_price.innerText =
      "$" +
      (
        new_total_price + parseFloat(shipping_fee.innerText.replace("$", ""))
      ).toFixed(2);

    invalid_coupon_msg.classList.remove("cpn_invalid");

    if (shipping_fee.innerText === "$0.00") {
      shipping_fee.innerText = "$" + inti_shipping_fee.toFixed(2);
    }
  } else if (coupon_code === couponcode[couponcode.length - 1]) {
    shipping_fee.innerText = "$0.00";
    final_total_price.innerText =
      "$" +
      (
        total_price + parseFloat(shipping_fee.innerText.replace("$", ""))
      ).toFixed(2);
    discount_field.innerText = `-$${inti_shipping_fee.toFixed(2)}`;
    invalid_coupon_msg.classList.remove("cpn_invalid");
  } else {
    invalid_coupon_msg.classList.add("cpn_invalid");
  }

  coupon_input.value = "";
});
