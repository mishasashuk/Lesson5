// Напишите функцию, которая при каждом вызове будет выводит увеличенный счетчик на 1

// Пример:
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
// counter(); // 11
// counter(); //12

function createCounter(start: number) {
  let counter = start;
  return () => {
    counter++;
    return counter;
  };
}
