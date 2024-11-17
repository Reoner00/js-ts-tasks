/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error();
  }
  return num1 + num2;
};
