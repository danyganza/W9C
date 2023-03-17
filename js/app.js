// Created arrays to be used
let item_names = ['Jordan', 'Nike', 'Puma'];
let item_prices = [15, 17, 23];
let in_stock = [true, false, true];

// Created variables and connecting them to arrays
let first_item_name = item_names[0];
let first_item_price = item_prices[0];

// Added new values using push function
item_names.push('Adidas');
item_prices.push(29);
in_stock.push(false);

// Gave last values using pop function
let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();
