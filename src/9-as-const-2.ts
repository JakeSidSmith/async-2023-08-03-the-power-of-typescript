type BaseThing = Record<string, number>;

const thing = {
  foo: 123,
  bar: 456,
} satisfies BaseThing;

const objectValuesToStrings = <const T extends Record<string, any>>(value: T) =>
  Object.fromEntries(
    Object.entries(value).map(([key, val]) => [key, val.toString()])
  ) as {
    [K in keyof T]: `${T[K]}`;
  };

// Returns { foo: `${number}`; bar: `${number}`; }
objectValuesToStrings(thing);

export {};
