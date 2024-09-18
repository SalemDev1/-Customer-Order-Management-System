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
        {name:'Caramel Frappe', quantity: 2}
        {name:'Arabian Coffee', quantity: 1}
    ], 
    status: 'Pending'
}); 
 
console.log(orders);
