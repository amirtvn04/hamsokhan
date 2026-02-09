import { formatDistanceToNow } from 'date-fns';
import { faIR } from 'date-fns/locale';

export function timeAgo(date) {
  if (!date) return '';

  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: faIR,
  });
}
