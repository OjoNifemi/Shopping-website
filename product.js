     const cartCount = document.querySelector('.cart-count');

      //Load cart from localStorage on page load
      let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartCount.textContent = cart.length; 

      //  Handle Add to Cart clicks
      const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');

        const name = productCard.querySelector('h4').textContent;
        const priceText = productCard.querySelector('.price').textContent
        const price = parseInt(priceText.replace("₦", "").replace(/,/g, ""));
        const image = productCard.querySelector('img').getAttribute('src');
        const id = Date.now(); 
        

        // Get current cart
        let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Check if the item already exists in the cart
        const existingItem = cart.find(item => item.name === name);

          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            cart.push({
            id,
            name,
            price,
            quantity: 1,
            image
        });
          }

        // Save updated cart
        localStorage.setItem("cartItems", JSON.stringify(cart));

        // Update the cart count in the navbar
        cartCount.textContent = cart.length;

      });
    });


