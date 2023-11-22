/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
	Monday = 'monday',
	Tuesday = 'tuesday',
	Wednesday = 'wednesday',
	Thursday = 'thursday',
	Friday = 'friday',
	Saturday = 'saturday',
	Sunday = 'sunday',
};

const isWeekend = (day: WeekDay): boolean => {
  return day === 'saturday' || day === 'sunday'
}

isWeekend(WeekDay.Friday)
