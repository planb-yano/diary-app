import dayjs from "dayjs";

export type InitialUserState = {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

export type InitialCalendarState = {
  calendar: {
    year: number;
    month: number;
  };
};

export type Month = {
  date: dayjs.Dayjs;
  id: string;
  note: string;
};
