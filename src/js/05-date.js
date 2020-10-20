import '../css/common.css';

/*
 - Создание: const date = new Date(); - создаёт целый объект с методами (для работы с датами)
 - Unix-время: 1 января 1970 00:00
 - Методы
 - Разница времени
 - Date.now() - если просто нужно получить время (Time Stamp - метку времени)
*/

//---------------------------------------------------

// const date = new Date();

// console.log(date);
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getTime());

// /-----------------------------------------------

// const date1 = new Date().getTime();
// console.log('date1', date1);

// setTimeout(() => {
//   const date2 = new Date().getTime();

//   console.log('date1', date1);
//   console.log('date2', date2);

//   console.log(date2 - date1);
// }, 3000);

//------------------------------------------

// Чтобы не создавать лишние объекты, которые захламляют память,
// используем метод Date.now(): const date = Date.now();


const date1 = Date.now();
console.log('date1', date1);

setTimeout(() => {
  const date2 = Date.now();

  console.log('date1', date1);
  console.log('date2', date2);

  console.log(date2 - date1);
}, 3000);