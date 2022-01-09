const randomProperty = (array, number) => {
  let sortedArray = array.sort(() => (Math.random() > 0.5 ? 1 : -1));
  let newArray = sortedArray.slice(0, number);

  return newArray;
};

export { randomProperty };
