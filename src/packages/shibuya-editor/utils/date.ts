import {
  format,
  addDays,
  isSameWeek,
  startOfWeek,
  addWeeks,
  isYesterday,
  isSameDay,
} from 'date-fns';
import { ja } from 'date-fns/locale';

export function formatDate(date: Date): string {
  const today = new Date();
  const dayBeforeYesterday = addDays(today, -2);
  const tomorrow = addDays(today, 1);
  const dayAfterTomorrow = addDays(today, 2);
  const nextWeekStart = startOfWeek(addWeeks(today, 1), { locale: ja });

  if (isYesterday(date)) {
    return '昨日';
  } else if (isSameDay(date, dayBeforeYesterday)) {
    return '一昨日';
  } else if (isSameWeek(date, today)) {
    if (isSameDay(date, today)) {
      return '今日';
    } else if (isSameDay(date, tomorrow)) {
      return '明日';
    } else if (isSameDay(date, dayAfterTomorrow)) {
      return '明後日';
    } else {
      return `今週の${format(date, 'E曜日', { locale: ja })}`;
    }
  } else if (isSameWeek(date, nextWeekStart)) {
    return `来週の${format(date, 'E曜日', { locale: ja })}`;
  } else if (date.getFullYear() === today.getFullYear()) {
    return format(date, 'M月d日');
  } else {
    return format(date, 'yyyy年M月d日');
  }
}
