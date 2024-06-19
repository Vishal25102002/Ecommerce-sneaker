document.addEventListener("DOMContentLoaded", function () {
  var basketButton = document.querySelector(".cart-btn");
  var cartContainer = document.querySelector(".cart-container");
  var cartBody = document.querySelector(".cart-body");
  var checkoutButton = document.querySelector(".checkoutBtn");
  var deleteCartItemButtons = document.querySelectorAll(".deleteCartItem");
  var updateCartButton = document.querySelector(".update-cart");
  var countDisplay = document.querySelector(".count-item");
  var totalPriceDisplay = document.querySelector(".total-amount");
  var closebtn = document.querySelector(".close-icon");
  var count = 0;
  var price = 125;

  function updateCartDetails() {
    if (count > 0) {
      cartBody.innerHTML = `
        <div class="cartItem">
          <img src="./images/image-product-1-thumbnail.jpg" alt="">
          <div class="cartItem-content">
            <h3>Fall Limited Edition Sneakers</h3>
            <span class="total-price">$${price.toFixed(
              2
            )} x ${count}</span><span class="total-amount">$${(
        price * count
      ).toFixed(2)}</span>
          </div>
          <button class="deleteCartItem">
            <img src="./images/icon-delete.svg" alt="">
          </button>
        </div>
        <button class="checkoutBtn">Checkout</button>
      `;
      totalPriceDisplay.textContent = `$${(price * count).toFixed(2)}`;
      cartContainer.style.display = "block";
      deleteCartItemButtons = document.querySelectorAll(".deleteCartItem");
      deleteCartItemButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          count = 0;
          countDisplay.textContent = count;
          updateCartDetails();
        });
      });
    } else {
      cartBody.innerHTML = "<p>Your cart is empty.</p>";
      totalPriceDisplay.textContent = "$0.00";
      cartContainer.style.display = "block";
    }
  }

  basketButton.addEventListener("click", function () {
    updateCartDetails();
  });

  checkoutButton.addEventListener("click", function () {
    alert("Congratulations! Your order has been placed.");
  });

  updateCartButton.addEventListener("click", function () {
    alert("Cart updated!");
  });

  document.querySelector(".plus-btn").addEventListener("click", function (e) {
    e.preventDefault();
    count++;
    countDisplay.textContent = count;
  });

  document.querySelector(".minus-btn").addEventListener("click", function (e) {
    e.preventDefault();
    if (count > 0) {
      count--;
      countDisplay.textContent = count;
    }
  });

  closebtn.addEventListener("click", function () {
    cartContainer.style.display = "none";
  });
});
