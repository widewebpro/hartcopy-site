export function formatDate(dateInput) {
  const date = new Date(dateInput);

  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = String(date.getFullYear()).slice(-2); 

  return `${day}.${month}.${year}`;
}

export function formatDateWithTextMonth(dateInput) {
  if (!dateInput) return ''

  const [day, month, yearShort] = dateInput.split('.')

  const year = Number(yearShort) < 50
    ? 2000 + Number(yearShort)
    : 1900 + Number(yearShort)

  const date = new Date(year, Number(month) - 1, Number(day))

  if (isNaN(date.getTime())) return ''

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ]

  const getOrdinal = (n) => {
    if (n >= 11 && n <= 13) return 'th'
    return ['th', 'st', 'nd', 'rd'][n % 10] || 'th'
  }

  return `${date.getDate()}${getOrdinal(date.getDate())} ${months[date.getMonth()]} ${date.getFullYear()}`
}