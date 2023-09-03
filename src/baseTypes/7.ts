/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  SUN = 'Sun',
  MON = 'Mon',
  TUE = 'Tue',
  WED = 'Wed',
  THU = 'Thu',
  FRI = 'Fri',
  SUT = 'Sut'

}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.SUN || day === DayOfWeek.SUT
}
