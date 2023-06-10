import React, { useState } from "react";
import "./Diary.scss";
import Calendar from "./Calendar";
import Note from "./Note";
import { getMonth } from "../../utils";
import { Month } from "../../Types";
import dayjs from "dayjs";
import Logout from "../logout/Logout";

const Diary = () => {
  const currentYear = dayjs().year();
  const currentMonth = dayjs().month();
  const currentMonthCount = dayjs().date();
  const initialActiveId = new Date(currentYear, currentMonth, currentMonthCount)
    .getTime()
    .toString();

  const [month, setMonth] = useState<Month[][]>(getMonth());
  const [activeDate, setActiveDate] = useState<string>(initialActiveId);

  const getActiveNote = () => {
    const activeNoteArray = month.map((month1) => {
      return month1.find((month2) => month2.id === activeDate) as Month;
    });
    return activeNoteArray.filter(Boolean);
  };

  const updateNote = (updatedNote: Month) => {
    const updatedNotesArray = month.map((month1) => {
      return month1.map((month2) => {
        if (month2.id === updatedNote.id) {
          return updatedNote;
        } else {
          return month2;
        }
      });
    });
    setMonth(updatedNotesArray);
  };

  return (
    <div className="diary">
      <div className="wrapper">
        <Calendar
          month={month}
          setMonth={setMonth}
          activeDate={activeDate}
          setActiveDate={setActiveDate}
        />
        <Logout />
      </div>
      <Note activeNote={getActiveNote()} updateNote={updateNote} />
    </div>
  );
};

export default Diary;
