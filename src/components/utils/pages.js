export const getTotalPages = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = totalPages => {
  const array = [];
  for (let i = 0; i < totalPages; i++) {
    array.push(i + 1);
  }
  return array;
};
