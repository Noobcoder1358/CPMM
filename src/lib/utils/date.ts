import { format, parse } from 'date-fns-jalali';

export const formatPersianDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'yyyy/MM/dd');
};

export const parsePersianDate = (dateString: string): Date => {
  return parse(dateString, 'yyyy/MM/dd', new Date());
};