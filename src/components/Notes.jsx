import { useDispatch, useSelector } from "react-redux";
import { setNoteForRange } from "../features/calendar/calendarSlice";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const normalizeRange = (start, end) => {
  return new Date(start) <= new Date(end)
    ? [start, end]
    : [end, start];
};

const Notes = () => {
  const dispatch = useDispatch();
  const { selectedStart, selectedEnd, notesMap } = useSelector((s) => s.calendar);

  const getKey = () => {
    if (selectedStart && selectedEnd) {
      const [s, e] = normalizeRange(selectedStart, selectedEnd);
      return `${s}_${e}`;
    }
    if (selectedStart) return `${selectedStart}_${selectedStart}`;
    return null;
  };

  const key = getKey();
  const [text, setText] = useState("");

  useEffect(() => {
    if (key && notesMap[key]) setText(notesMap[key]);
    else setText("");
  }, [key, notesMap]);

  useEffect(() => {
    localStorage.setItem("calendar", JSON.stringify({ notesMap }));
  }, [notesMap]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="p-6 bg-linear-to-br from-gray-50 to-gray-100 h-full flex flex-col"
    >
      <h2 className="text-xl font-bold mb-4">📝 Notes</h2>

      {!key ? (
        <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
          Select a date or drag a range
        </div>
      ) : (
        <>
          <div className="mb-3 text-xs text-gray-500">
            {selectedEnd
              ? `${selectedStart} → ${selectedEnd}`
              : selectedStart}
          </div>

          <motion.textarea
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            value={text}
            onChange={(e) => {
              setText(e.target.value);

              const [s, eRange] = selectedEnd
                ? normalizeRange(selectedStart, selectedEnd)
                : [selectedStart, selectedStart];

              dispatch(
                setNoteForRange({ start: s, end: eRange, text: e.target.value })
              );
            }}
            placeholder="Write something amazing..."
            className="flex-1 p-4 rounded-2xl border border-gray-300 bg-white shadow-md
            focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          />
        </>
      )}
    </motion.div>
  );
};

export default Notes;