function calculateTotal() {
    // Get input values
    var petrolCost = parseFloat(document.getElementById('petrol-cost').value);
    var litersPurchased = parseFloat(document.getElementById('liters-purchased').value);

    // Calculate total cost
    var totalCost = petrolCost * litersPurchased;

    // Display total cost
    document.getElementById('total-cost').innerText = "Total Cost: $" + totalCost.toFixed(2);
}