// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

function padZero(num: number): string {
  return num.toString().padStart(2, "0");
}

function getDate(dateString: string): string {
  const now: Date = new Date(dateString);

  const day = padZero(now.getDate());
  const month = padZero(now.getMonth() + 1);
  const year = padZero(now.getFullYear());
  const hours = padZero(now.getHours());
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
const formattedDate = new Date().toString();
console.log(getDate(formattedDate));
