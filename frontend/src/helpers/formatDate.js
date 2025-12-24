export function formatDate(dateInput) {
  const date = new Date(dateInput);

  const day = String(date.getDate()).padStart(2, '0'); // день с ведущим нулем
  const month = String(date.getMonth() + 1).padStart(2, '0'); // месяц с ведущим нулем (0-11 +1)
  const year = String(date.getFullYear()).slice(-2); // последние две цифры года

  return `${day}.${month}.${year}`;
}