import { useSelector } from "react-redux";
import DayCell from "../../components/DayCell";
import { getDaysInMonth, getFirstDay, formatDate } from "../../utils/dateUtils";

const Calendar = () => {
  const { currentMonth, currentYear } = useSelector((state) => state.calendar);

  const days = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDay(currentYear, currentMonth);

  const cells = [];

  for (let i = 0; i < firstDay; i++) cells.push(<div key={i} />);

  for (let d = 1; d <= days; d++) {
    const date = formatDate(currentYear, currentMonth, d);
    cells.push(<DayCell key={date} date={date} />);
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-semibold text-gray-500">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {cells}
      </div>
    </div>
  );
};

export default Calendar;
