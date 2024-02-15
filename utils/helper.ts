const validIdList = Array.from({ length: 81 }, (_, i) => i + 1);

export const isValidId = (id: number): boolean => {
  return validIdList.includes(id);
};
