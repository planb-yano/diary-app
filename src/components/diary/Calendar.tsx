import React, { useState } from "react";
import "./Calendar.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getMonth } from "../../utils";
import dayjs from "dayjs";
import { Month } from "../../Types";

type Props = {
  month: Month[][];
  setMonth: React.Dispatch<React.SetStateAction<Month[][]>>;
  activeDate: string;
  setActiveDate: React.Dispatch<React.SetStateAction<string>>;
};

const Calendar = (props: Props) => {
  const { month, setMonth, activeDate, setActiveDate } = props;
  const [monthIndex, setMonthIndex] = useState<number>(dayjs().month());

  const getInitialActiveDateInfo = (index: number) => {
    return getMonth(index).map((index1) => {
      return (
        index1.find((index2) => index2.date.date() === 1) ?? {
          date: dayjs(),
          id: "",
          note: "",
          active: false,
        }
      );
    });
  };

  const handleActive = (id: string) => {
    if (activeDate !== id) {
      setActiveDate(id);
    }
  };
  const handleNextMonth = () => {
    const nextMonthIndex = monthIndex + 1;
    setMonthIndex(nextMonthIndex);
    setMonth(getMonth(nextMonthIndex));
    const nextInitialActiveDateInfo = getInitialActiveDateInfo(nextMonthIndex);
    setActiveDate(nextInitialActiveDateInfo[0].id);
  };
  const handlePrevMonth = () => {
    const prevMonthIndex = monthIndex - 1;
    setMonthIndex(prevMonthIndex);
    setMonth(getMonth(prevMonthIndex));
    const prevInitialActiveDateInfo = getInitialActiveDateInfo(prevMonthIndex);
    setActiveDate(prevInitialActiveDateInfo[0].id);
  };
  return (
    <div className="calendar">
      <div className="calendarHeader">
        <ArrowBackIosNewIcon onClick={handlePrevMonth} />
        <h1>{month[2][1].date.format("YYYY/MM")}</h1>
        <ArrowForwardIosIcon onClick={handleNextMonth} />
      </div>
      <div className="calendarWrapper">
        <table className="calendarMain">
          <tbody>
            <tr>
              <th>日</th>
              <th>月</th>
              <th>火</th>
              <th>水</th>
              <th>木</th>
              <th>金</th>
              <th>土</th>
            </tr>
            {month.map((week, index) => (
              <tr key={index} className="calendarWeek">
                {week.map((date) => (
                  <td
                    key={date.id}
                    onClick={() => handleActive(date.id)}
                    className={`calendarDate ${
                      date.id === activeDate && "active"
                    }`}
                  >
                    {date.date.date()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
