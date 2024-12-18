function isSameType(value1, value2) {
   if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check if the types of both values are the same
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Parse to number if not NaN
value1 = isNaN(value1) ? value1 : Number(value1);
value2 = isNaN(value2) ? value2 : Number(value2);

alert(isSameType(value1, value2));
