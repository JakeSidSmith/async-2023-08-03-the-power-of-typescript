type ReverseString<T extends string> = T extends `${infer First}${infer Rest}`
  ? `${ReverseString<Rest>}${First}`
  : T;

const reverseString = <T extends string>(value: T) =>
  value.split('').reverse().join('') as ReverseString<T>;

// Returns "!cnysA ,olleH"
reverseString('Hello, Async!');

export {};
