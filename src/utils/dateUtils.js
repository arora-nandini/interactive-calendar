// Get total days in a month
export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// Get first day index (0 = Sunday)
export const getFirstDay = (year, month) => {
  return new Date(year, month, 1).getDay();
};

// Convert to ISO string (important for comparison)
export const formatDate = (year, month, day) => {
  return new Date(year, month, day).toISOString();
};