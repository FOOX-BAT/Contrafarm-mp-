// Search functionality for filtering vegetables
function filterVegetables() {
    const input = document.getElementById('searchBar');
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll('.vegetable-list .item'); // Targeting items inside vegetable-list

    items.forEach(item => {
        const vegetableName = item.querySelector('h1').textContent.toLowerCase(); // Get the vegetable name from the h1 tag
        if (vegetableName.indexOf(filter) > -1) {
            item.style.display = ''; // Show
        } else {
            item.style.display = 'none'; // Hide
        }
    });
}

// Store the list of vegetables added to the shop
const productList = document.getElementById('seller-products');
let totalEarnings = 0; // Variable to track total earnings

// Function to handle form submission for adding vegetables
function handleFormSubmit(event) {
    event.preventDefault();

    // Get the specific form being submitted
    const form = event.target;

    // Get the vegetable name from the visible header
    const productName = form.parentElement.querySelector('h1').textContent;
    const price = parseFloat(form.querySelector('input[id="price"]').value); // Convert to number (price in rupees)
    const quantity = parseFloat(form.querySelector('input[id="quantity"]').value); // Convert to number (quantity in kilograms)

    // Calculate earnings for this product
    const earnings = price * quantity; // Directly using kilograms and rupees

    // Create a new product listing for the shop page
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
        <h4>${productName}</h4>
        <p>Price: ₹${price} per kg</p>
        <p>Quantity Available: ${quantity} kg</p>
        <p>Potential Earnings: ₹${earnings.toFixed(2)}</p>
    `;

    // Add the new product to the seller's product list
    productList.appendChild(productDiv);

    // Update total earnings
    totalEarnings += earnings;

    // Display total earnings on the "My Shop" page
    updateTotalEarningsDisplay();

    // Clear the form fields after submission
    form.reset();
}

