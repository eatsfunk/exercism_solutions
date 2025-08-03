/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const main = pizza === 'Margherita' ? 7 : pizza === 'Caprese' ? 9 : 10;
  const extrasPrice = extras.reduce((total, extra) => {
    if (extra === 'ExtraSauce') return total + 1;
    if (extra === 'ExtraToppings') return total + 2;
    return total;
  }, 0);
  return main + extrasPrice;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  const total = pizzaOrders.reduce((sum, order) => {
    const pizzaCost = pizzaPrice(order.pizza, ...order.extras);
    return sum + pizzaCost;
  }, 0);
  return total; 
}
