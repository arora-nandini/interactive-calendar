import { useDispatch, useSelector } from "react-redux";
import { nextMonth, prevMonth } from "../features/calendar/calendarSlice";
import { motion } from "framer-motion";

const Header = () => {
  const dispatch = useDispatch();
  const { currentMonth, currentYear } = useSelector((s) => s.calendar);

  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" });

  return (
    <div className="relative h-52 text-white overflow-hidden">
      <motion.img
        key={currentMonth}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/20" />

      <div className="relative z-10 flex justify-between items-center h-full px-6">
        <button onClick={() => dispatch(prevMonth())} className="text-xl hover:scale-125 transition">◀</button>

        <motion.h1
          key={monthName}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold"
        >
          {monthName} {currentYear}
        </motion.h1>

        <button onClick={() => dispatch(nextMonth())} className="text-xl hover:scale-125 transition">▶</button>
      </div>
    </div>
  );
};

export default Header;
