// 1. Сделать массив значений ключей
// 2. Сравнить все значения и записать в greastestValue самое большое
// 3. Вернуть имя ключа

// Вариант 1

// const findBestEmployee = function(employees) {
//   const values = Object.keys(employees);
//   let greastestValue = 0;
//   let greastestEmploee = '';
//   for (const key of values) {
//     if (employees[key] > greastestValue) {
//       greastestValue = employees[key];
//       greastestEmploee = key;
//     }
//   }
//   return greastestEmploee;
// };

// Вариант 2

// Решил добавить еще проверку, если попадается 2 сотрудника с одинаковыми
// показаниями, то записывать их в массив.

// const findBestEmployee = function(employees) {
//   const values = Object.keys(employees);
//   let greastestValue = 0;
//   let greastestEmploee = [];
//   for (const key of values) {
//     if (employees[key] === greastestValue) {
//       greastestEmploee.push(key);
//     }
//     if (employees[key] > greastestValue) {
//       greastestValue = employees[key];
//       greastestEmploee = [];
//       greastestEmploee.push(key);
//     }
//   }
//   return greastestEmploee;
// };

// Вариант 3

// Меня осенило после второго вебинара. Решил не удалять предыдущие варианты.

// const findBestEmployee = function(employees) {
//   const greastestValue = Math.max(...Object.values(employees));
//   let greastestEmploee = [];
//   for (const key of Object.keys(employees)) {
//     if (employees[key] === greastestValue) {
//       greastestEmploee.push(key);
//     }
//   }
//   return greastestEmploee;
// };

// const findBestEmployee = function(employees) {
//   const greastestValue = Math.max(...Object.values(employees));
//   let greastestEmploee = [];
//   for (const key of Object.keys(employees)) {
//     if (employees[key] === greastestValue) {
//       greastestEmploee.push(key);
//     }
//   }
//   return greastestEmploee;
// };

const findBestEmployee = function(employees) {
  let [searchKey, searchValue] = ['', 0];
  Object.entries(employees).forEach(([key, value]) => {
    if (value > searchValue) {
      [searchKey, searchValue] = [key, value];
    }
  });
  return searchKey;
};

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    ben: 99,
    ann: 29,
    david: 35,
    helen: 1,
    ashton: 35,
    lorence: 99,
  }),
); // ben lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
