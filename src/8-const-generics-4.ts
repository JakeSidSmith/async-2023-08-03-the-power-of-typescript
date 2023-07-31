const objectValuesToStrings = <T extends Record<string, any>>(value: T) =>
  Object.fromEntries(
    Object.entries(value).map(([key, val]) => [key, val.toString()])
  ) as {
    [K in keyof T]: `${T[K]}`;
  };

// Returns { foo: `${number}`; bar: `${number}`; }
objectValuesToStrings({
  foo: 123,
  bar: 456,
});

export {};
