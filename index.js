function sumItems(array) {
  let sum = 0;
  for (const element of array) {
    if (!Array.isArray(element)) { 
      sum += element;
    } else {
      //recursive case
      sum += sumItems(element);
    }
  }
  return sum;
}

module.exports = sumItems;