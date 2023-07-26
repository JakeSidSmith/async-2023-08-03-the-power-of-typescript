const toUpperCase = <T extends string>(value: T) =>
  value.toUpperCase() as Uppercase<T>;

// Returns "ASYNC"
toUpperCase('Async');

export {};
