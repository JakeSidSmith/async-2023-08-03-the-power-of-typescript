type ToGetter<T extends string> = T extends `${infer First}${infer Rest}`
  ? `get${Uppercase<First>}${Rest}`
  : never;

const toGetter = <T extends string>(value: T) =>
  `get${value.charAt(0).toUpperCase()}${value.slice(1)}` as ToGetter<T>;

// Returns "getName"
toGetter('name');

export {};
