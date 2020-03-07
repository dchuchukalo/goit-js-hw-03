const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// Вариант 1

// const getAllPropValues = function(arr, prop) {
//   let outputArray = [];
//   for (const product of products) {
//     const keys = Object.keys(product);
//     for (const key of keys) {
//       if (prop === key) {
//         outputArray.push(product[key]);
//       }
//     }
//   }
//   return outputArray;
// };

// Сначала сделал Вариант 1, потом подумал о том, что должно быть решение более простое.
// Методом проб и ошибок подставил property в product. Заработало. Но возникла ошибка с
// undefined. Добавить проверку было уже не сложно.

// Вариант 2

// const getAllPropValues = function(arr, prop) {
//   let outputArray = [];
//   for (const product of products) {
//     if (product[prop]) {
//       outputArray.push(product[prop]);
//     }
//   }
//   return outputArray;
// };

const getAllPropValues = (arr, prop) => {
  return arr
    .filter(product => product[prop] !== undefined)
    .map(product => product[prop]);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
