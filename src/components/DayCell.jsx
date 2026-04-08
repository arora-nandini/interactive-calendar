import { useDispatch, useSelector } from "react-redux";
import { startDrag, dragOver, endDrag } from "../features/calendar/calendarSlice";
import { motion } from "framer-motion";

const DayCell = ({ date }) => {
  const dispatch = useDispatch();
  const { selectedStart, selectedEnd } = useSelector((s) => s.calendar);

  const normalize = (s, e) => {
    return new Date(s) <= new Date(e) ? [s, e] : [e, s];
  };

  let inRange = false;
  let isStart = false;
  let isEnd = false;

  if (selectedStart && selectedEnd) {
    const [s, e] = normalize(selectedStart, selectedEnd);
    inRange = date >= s && date <= e;
    isStart = date === s;
    isEnd = date === e;
  } else if (selectedStart) {
    isStart = date === selectedStart;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      layout
      onMouseDown={() => dispatch(startDrag(date))}
      onMouseEnter={() => dispatch(dragOver(date))}
      onMouseUp={() => dispatch(endDrag())}
      className={`h-12 flex items-center justify-center cursor-pointer select-none text-sm font-medium
      ${isStart ? "bg-blue-600 text-white rounded-l-full" : ""}
      ${isEnd ? "bg-blue-600 text-white rounded-r-full" : ""}
      ${inRange ? "bg-blue-200" : "hover:bg-gray-200"}`}
    >
      {new Date(date).getDate()}
    </motion.div>
  );
};

export default DayCell;
