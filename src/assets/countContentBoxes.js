export const countContentBoxes = (template) => {
  let count = 0;
  for (const item of template) {
    if (item.hasOwnProperty("bullet")) {
      count++;
    }
  }
  return count;
};
