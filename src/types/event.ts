export const DateEventTypeObj = {
  cinema: 'Кино',
  science: 'Космос',
  culture: 'Культура',
  wars: 'Конфликты',
  birthday: 'Дни рождения',
  general: '',
} as const;

export type DateEventType = keyof typeof DateEventTypeObj;

export type DateEvent = {
  id: number;
  type: DateEventType;
  date: number;
  text: string;
};

export default DateEvent;
