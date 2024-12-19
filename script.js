// Array to store cart items
let cart = [];

// Add item to cart
function addToCart(itemName, itemPrice) {
  // Create the item object
  const item = { name: itemName, price: itemPrice };

  // Add item to cart array
  cart.push(item);

  // Update the cart UI
  updateCart();
}

// Remove item from cart
function removeFromCart(itemIndex) {
  cart.splice(itemIndex, 1); // Remove item at the specified index
  updateCart(); // Update the UI after removal
}

// Update cart UI
function updateCart() {
  const cartList = document.getElementById("cart-items-list");
  cartList.innerHTML = ''; // Clear existing cart items

  let total = 0;

  // Add each item to the cart list
  cart.forEach((item, index) => {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">Remove</button>`;
    cartList.appendChild(cartItem);

    total += item.price; // Add item price to total
  });

  document.getElementById("total-price").textContent = `Total Price: ${total}`;
}
