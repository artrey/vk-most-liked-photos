export const getCurrentYear = () => new Date().getFullYear();

export const getRangeYears = (start, stop) => {
  const number = stop - start + 1;
  return [...Array(number).keys()].map(i => i + start);
};
