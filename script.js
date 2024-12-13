function isSameType(value1, value2) {
  // Parse values to check for NaN
  const parsedValue1 = Number(value1);
  const parsedValue2 = Number(value2);

  // Check if both values are NaN
  if (Number.isNaN(parsedValue1) && Number.isNaN(parsedValue2)) {
    return true;
  }

  // Check if the types of both original values are the same
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));
