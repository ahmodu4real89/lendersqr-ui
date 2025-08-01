import { format } from "date-fns";

 function cleanFormattedDate(dateWithAt: string): string {
  return dateWithAt.replace(' at ', ' ');
}


export function formatDateTime(dateStr: string): string {
  const date = new Date(dateStr);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  const formated  = new Intl.DateTimeFormat('en-US', options).format(date);
  return cleanFormattedDate(formated)
}


export function formatCalender(date: Date): string {
  return format(date, 'MMM dd, yyyy,');
}