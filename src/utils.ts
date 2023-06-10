import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
  const startDayOfMonth = dayjs(new Date(year, month, 1)).day();
  const endDateOfMonth = dayjs(new Date(year, month + 1, 0)).date();
  const row = Math.ceil((startDayOfMonth + endDateOfMonth) / 7);
  let currentMonthCount = 0 - startDayOfMonth;
  const daysMatrix = new Array(row).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return {
        date: dayjs(new Date(year, month, currentMonthCount)),
        id: new Date(year, month, currentMonthCount).getTime().toString(),
        note: ""
      };
    });
  });
  return daysMatrix;
}
