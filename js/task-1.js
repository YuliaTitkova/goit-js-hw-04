function isEnoughCapacity(products, containerSize) {
  const values = Object.values(products);
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total <= containerSize;
}
