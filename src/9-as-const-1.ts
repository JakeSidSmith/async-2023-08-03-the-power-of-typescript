type BaseThing = Record<string, number>;

const thing: BaseThing = {
  foo: 123,
  bar: 456,
};

const objectValuesToStrings = <const T extends Record<string, any>>(value: T) =>
  Object.fromEntries(
    Object.entries(value).map(([key, val]) => [key, val.toString()])
  ) as {
    [K in keyof T]: `${T[K]}`;
  };

// Returns { [x: string]: `${number}`; }
objectValuesToStrings(thing);

export {};
