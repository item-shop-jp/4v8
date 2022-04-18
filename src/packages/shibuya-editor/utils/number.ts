export function decimalToRoman(num: number) {
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['m', 'cm', 'd', 'cd', 'c', 'xc', 'l', 'xl', 'x', 'ix', 'v', 'iv', 'i'];
  let dest = '';
  for (let i = 0; i < decimal.length; i++) {
    while (decimal[i] <= num) {
      dest += roman[i];
      num -= decimal[i];
    }
  }
  return dest;
}

export function decimalToAlphabet(num: number) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let dest = '';
  while (true) {
    const remainder = --num % alphabet.length;
    dest = alphabet[remainder] + dest;
    if (num < alphabet.length) break;
    num = Math.floor(num / alphabet.length);
  }
  return dest;
}
