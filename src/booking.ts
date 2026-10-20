export const ticketPrices = {adult: 14, child: 7};
export const arrivalTimes = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00'];
export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
export function firstVisitDate(now = new Date()) {
  const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  if (date.getDay() === 1) date.setDate(date.getDate() + 1);
  return localDate(date);
}
export function bookingError(date: string, time: string, adults: number, children: number, today = localDate()) {
  const parsed = new Date(date + 'T12:00:00');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(parsed.getTime()) || localDate(parsed) !== date || date < today) return 'Please choose today or a future date.';
  if (parsed.getDay() === 1) return 'The garden rests on Mondays. Please choose another day.';
  if (!arrivalTimes.includes(time)) return 'Please choose an available arrival time.';
  if (!Number.isInteger(adults) || adults < 1 || adults > 8 || !Number.isInteger(children) || children < 0 || children > 8) return 'Choose 1–8 adults and 0–8 children for this demo reservation.';
  return '';
}
export function ticketTotal(adults: number, children: number) { return adults * ticketPrices.adult + children * ticketPrices.child; }
