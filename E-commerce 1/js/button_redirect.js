// Redirect buttons with the class "go_to_shop" to the shop page

let btns = document.querySelectorAll(".go_to_shop");

for (btn of btns) {
  btn.addEventListener("click", function () {
    window.location.href = "shop.html";
  });
}
