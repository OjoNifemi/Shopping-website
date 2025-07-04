document.addEventListener("DOMContentLoaded", renderCart);
function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartContainer = document.querySelector(".cart-container");
  const totalDisplay = document.querySelector(".cart-summary h3");
  const checkoutBtn = document.querySelector('.checkout-btn');

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="empty-message">Your cart is empty.</p>`;
    totalDisplay.textContent = "Total: ₦0";
    checkoutBtn.disabled = true;
    return;
  }
    checkoutBtn.disabled = false;

  let total = 0;
  checkoutBtn.addEventListener('click',() =>{
    localStorage.clear();
    alert("Thank you for your purchase!");
    location.reload();
  })
  cart.forEach(item => {
    const cartItem = document.createElement("div");
    price = item.price
    let formattedPrice = `${price.toLocaleString()}`;
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="item-details">
        <h4>${item.name}</h4>
        <p>Price: ₦${formattedPrice}</p>
        <div class="quantity-control">
          <button class="decrease-btn" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="increase-btn" data-id="${item.id}">+</button>
        </div>
        <button class="remove-btn" data-id="${item.id}">Remove</button>
      </div>
    `;
    cartContainer.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  totalDisplay.textContent = `Total: ₦${total.toLocaleString()}`;

  // Increase
  document.querySelectorAll(".increase-btn").forEach(button => {
    button.addEventListener("click", () => {
      const id = parseInt(button.dataset.id);
      const item = cart.find(i => i.id === id);
      if (item) {
        item.quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(cart));
        renderCart();
      }
    });
  });

  // Decrease
  document.querySelectorAll(".decrease-btn").forEach(button => {
    button.addEventListener("click", () => {
      const id = parseInt(button.dataset.id);
      const item = cart.find(i => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(cart));
        renderCart();
      }
    });
  });

  // Remove
  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", () => {
      const id = parseInt(button.dataset.id);
      const updatedCart = cart.filter(i => i.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      renderCart();
    });
  });
}

