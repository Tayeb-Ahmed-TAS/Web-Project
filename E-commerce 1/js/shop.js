let product = document.querySelectorAll(".product");

for (p of product) {
  p.addEventListener("click", function (e) {
    window.location.href = `${this.getAttribute("data-name")}.html`;
  });
}
