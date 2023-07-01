import dayjs from 'dayjs';

export const getAge = (birthdayDate: Date | string | number) => {
  const date = dayjs(birthdayDate);

  return Math.abs(date.diff(new Date(), 'year'));
};
