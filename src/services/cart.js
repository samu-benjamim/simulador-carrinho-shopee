//adicionar item
async function addItem(userCart, item) {
  userCart.push(item);
}
//deleter item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== 1) {
    userCart.splice(index, 1);
  }
}
//remover um item
async function removeItem(userCart, item) {
  const indexFOund = userCart.findIndex((p) => p.name === item.name);
  if (indexFOund === -1) {
    console.log("item não encontrado");
    return;
  }

  if (userCart[indexFOund].quantity > 1) {
    userCart[indexFOund].quantity -= 1;
    item.subtotal();
    console.log("item retirado");
  } else {
    deleteItem(userCart, userCart[indexFOund].name);
  }
}

async function displayCart(userCart) {
  console.log("Shopee Cart List: ");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} . ${
        item.quantity
      } - Subtotal R$${item.subtotal()}`
    );
  });
}

//calcular total
async function calculateTotal(userCart) {
  console.log("Shopee Cart total is: ");
  console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };
