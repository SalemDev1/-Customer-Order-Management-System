//Customer Order Management 

//Task 1- Create an Inventory Array of Product Objects
const inventory = [
    { name: 'Caramel Frappe', price: 3, quantity: 10 },
    { name: 'Iced Caramel Macchiato', price: 4, quantity: 5 },
    { name: 'Black Coffee', price: 4, quantity: 6 },
    { name: 'Arabian Coffee', price: 5, quantity: 4 }
];

// Task 2- Create an Orders Array of Order Objects

const orders = [];

orders.push({
    customerName: 'Elena',
    items: [
        {name:'Caramel Frappe', quantity: 2},
        {name:'Arabian Coffee', quantity: 1}
    ], 
    status: 'Pending'
}); 
 
console.log(JSON.stringify(orders, null, 2));

//Outputs- logs an order example

//Task 3- Create a Function to Place an Order
function placeOrder(customerName, itemsOrdered, inventory) {
    let inStock = true;  

    itemsOrdered.forEach(item => {
        
        let inventoryItem = inventory.find(i => i.name === item.name);
        
        if (inventoryItem) {
            if (item.quantity > inventoryItem.quantity) {
                console.error(`Error: Unfortunately, there is not enough stock for ${item.name}`);
                inStock = false;  
            }
        } else {
            console.error(`Error: Unfortunately, ${item.name} not found`);
            inStock = false;  
        }
    });


    if (inStock) {
        itemsOrdered.forEach(item => {
            let inventoryItem = inventory.find(i => i.name === item.name);
            inventoryItem.quantity -= item.quantity;  
        });

        orders.push({
            customerName: customerName,
            items: itemsOrdered,
            status: 'Pending'  
        });

        console.log(`Order has been placed for ${customerName}`);
    } else {
        console.log(`Order has not been placed for ${customerName}`);
    }
}

let customerOrder = [
    { name: 'Caramel Frappe', quantity: 2 },
    { name: 'Arabian Coffee', quantity: 1 }
];

placeOrder('Elena', customerOrder, inventory);  

console.log('Updated Inventory:');
inventory.forEach(item => {
    console.log(`Product: ${item.name}, Price: $${item.price}, Quantity: ${item.quantity}`);
});

console.log('Orders:');
orders.forEach(order => {
    console.log(`Order for ${order.customerName}:`);
    order.items.forEach(item => {
        console.log(`Product: ${item.name}, Quantity: ${item.quantity}`);
    });
});