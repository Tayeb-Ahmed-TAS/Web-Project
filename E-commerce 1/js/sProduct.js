let mainImg = document.querySelector("#MainImg"),
  smallImg = document.querySelectorAll(".small-img");

for (im of smallImg) {
  im.addEventListener("click", function (e) {
    mainImg.src = this.src;
  });
}

// For Zoom In and move on hover main image
mainImg.addEventListener("mouseover", function () {
  mainImg.classList.add("zoomed");

  mainImg.addEventListener("mousemove", function (e) {
    const rect = mainImg.getBoundingClientRect(); // Get the size of the element and its position relative to the viewport
    const x = e.clientX - rect.left; // X position within the element.
    const y = e.clientY - rect.top; // Y position within the element.
    mainImg.style.transformOrigin = `${x}px ${y}px`;
  });
});

// For Zoom out on hover main image
mainImg.addEventListener("mouseout", function () {
  mainImg.classList.remove("zoomed");
  mainImg.style.transformOrigin = `center center`;
});

// Quantity increase and decrease functionality
const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");
const quantityInput = document.querySelector(".quantity-controls input");

decreaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

increaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});
