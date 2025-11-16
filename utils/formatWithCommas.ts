export function formatWithCommas(num: number | string): string {
  const str = num.toString();
  const [integerPart, decimalPart] = str.split(".");

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  return decimalPart !== undefined
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;
} 