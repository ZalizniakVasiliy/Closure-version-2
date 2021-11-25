function showRandomUniqueNumb() {
  const randomUniqueNumbsArr = [];
  return function getRandomUniqueNumb() {
    /* Во избежание ошибки о переполнении call stack-а
      'Uncaught RangeError: Maximum call stack size exceeded'
       делаю выход из функции при превышении длины массива для
       хранения случайных уникальных чисел*/
    if (randomUniqueNumbsArr.length === 100) return;
    /* Использую Math.floor для округления числа к целому значению */
    const randomNumb = Math.floor(Math.random() * 100 + 1);
    for (let i = 0; i < randomUniqueNumbsArr.length; i++) {
      if (randomUniqueNumbsArr[i] === randomNumb) return getRandomUniqueNumb();
    }
    randomUniqueNumbsArr.push(randomNumb);
    return randomNumb;
  };
}
const result = showRandomUniqueNumb();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result()); //undefined - проверка на 8-ой строке
console.log(result()); //undefined - проверка на 8-ой строке
