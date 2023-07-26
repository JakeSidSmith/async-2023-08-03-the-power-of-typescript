type KebabToCamelCaseInternal<T extends string> =
  T extends `${infer First}${infer RestWord}-${infer Rest}`
    ? `${Uppercase<First>}${RestWord}${KebabToCamelCaseInternal<Rest>}`
    : T extends `${infer First}${infer RestWord}`
    ? `${Uppercase<First>}${RestWord}`
    : T;

type KebabToCamelCase<T extends string> =
  T extends `${infer First}-${infer Rest}`
    ? `${First}${KebabToCamelCaseInternal<Rest>}`
    : T;

const kebabToCamelCase = <T extends string>(value: T) =>
  value.replace(/-([a-z])/g, (_match, letter) =>
    letter.toUpperCase()
  ) as KebabToCamelCase<T>;

// Returns "helloAsync"
kebabToCamelCase('hello-async');

// Returns "thisWorksWithMoreWordsToo"
kebabToCamelCase('this-works-with-more-words-too');

export {};
