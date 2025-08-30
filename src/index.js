import createItem from "./services/item.js";
import * as cartServices from "./services/cart.js";

const Mycart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 8);
const item2 = await createItem("hotwheels lamborguini", 39.99, 3);
const item3 = await createItem("hotwheels batman", 19.99, 6);

await cartServices.addItem(Mycart, item1);
await cartServices.addItem(Mycart, item2);
await cartServices.addItem(Mycart, item3);

await cartServices.deleteItem(Mycart, item2.name);

await cartServices.removeItem(Mycart, item1);
await cartServices.removeItem(Mycart, item1);
await cartServices.removeItem(Mycart, item1);

await cartServices.displayCart(Mycart);

await cartServices.calculateTotal(Mycart);
