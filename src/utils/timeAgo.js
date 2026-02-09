import { formatDistanceToNow } from 'date-fns';
import { faIR } from 'date-fns/locale';

const toPersianDigits = (str) => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str.replace(/\d/g, (d) => persianDigits[d]);
};

export function timeAgo(date) {
  if (!date) return '';

  const timeString = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: faIR,
  });

  return toPersianDigits(timeString);
}