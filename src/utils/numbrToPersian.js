export function numberToFa(value) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  if (typeof value === "number") {
    value = value.toString();
  }

  if (typeof value === "string") {
    return value.replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
  }

  return value;
}
