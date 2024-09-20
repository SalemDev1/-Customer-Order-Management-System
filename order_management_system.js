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
 
console.log(JSON.stringify(orders, null, 2)); // experimenting with different console.logs

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

//Task 4- Create a Function to Calculate Total for an Order
function calculateOrderTotal(order, inventory) {
    let total = 0;
    for (let i = 0; i < order.items.length; i++) {
        let orderedItem = order.items[i];

        for (let i = 0; i < inventory.length; i++) {
            let inventoryItem = inventory[i];

            if (inventoryItem.name === orderedItem.name) {
                total += inventoryItem.price * orderedItem.quantity;
            }
        }
    }
    return total;  
}
let total = calculateOrderTotal(orders[0], inventory);  
console.log("The total cost of the order is: $" + total);
//Logs Elenas Orders

//Task 5- Create a Function to Mark an Order as Completed
function completeOrder(customerName) {
    for (let orderPlace = 0; orderPlace < orders.length; orderPlace++) {
        if (orders[orderPlace].customerName === customerName) {
            orders[orderPlace].status = 'Completed';
            console.log(`Great news! The order for ${customerName} has been successfully completed!`);
            return;
        }
    }
    console.log(`Oops! We couldn't find an order for ${customerName}. Please check the name and try again.`);
}

completeOrder('Elena');

//Task 6- Create a Function to Check Pending Orders
function checkPendingOrders() {
    let hasPendingOrders = false;
    console.log("Checking for pending orders...");

    for (let orderPlace = 0; orderPlace < orders.length; orderPlace++) {
        if (orders[orderPlace].status === 'Pending') {
            console.log(`Order for ${orders[orderPlace].customerName} is still pending.`);
            hasPendingOrders = true;
        }
    }

    if (!hasPendingOrders) {
        console.log("All orders have been completed! No pending orders at the moment.");
    }
}

checkPendingOrders();