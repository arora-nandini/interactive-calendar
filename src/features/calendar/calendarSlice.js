import { createSlice } from "@reduxjs/toolkit";

const saved = (() => {
  try {
    return JSON.parse(localStorage.getItem("calendar")) || {};
  } catch {
    return {};
  }
})();

const normalizeRange = (start, end) => {
  return new Date(start) <= new Date(end)
    ? [start, end]
    : [end, start];
};

const keyFromRange = (start, end) => {
  const [s, e] = normalizeRange(start, end);
  return `${s}_${e}`;
};

const initialState = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  selectedStart: null,
  selectedEnd: null,
  notesMap: saved.notesMap || {},
  isDragging: false,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    nextMonth: (state) => {
      if (state.currentMonth === 11) {
        state.currentMonth = 0;
        state.currentYear++;
      } else state.currentMonth++;
    },
    prevMonth: (state) => {
      if (state.currentMonth === 0) {
        state.currentMonth = 11;
        state.currentYear--;
      } else state.currentMonth--;
    },
    startDrag: (state, action) => {
      state.isDragging = true;
      state.selectedStart = action.payload;
      state.selectedEnd = null;
    },
    dragOver: (state, action) => {
      if (state.isDragging) {
        state.selectedEnd = action.payload;
      }
    },
    endDrag: (state) => {
      state.isDragging = false;
    },
    setNoteForRange: (state, action) => {
      const { start, end, text } = action.payload;
      const key = keyFromRange(start, end);
      state.notesMap[key] = text;
    },
  },
});

export const {
  nextMonth,
  prevMonth,
  startDrag,
  dragOver,
  endDrag,
  setNoteForRange,
} = calendarSlice.actions;

export default calendarSlice.reducer;