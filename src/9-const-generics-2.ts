const objectValuesToStrings = <T extends Record<string, any>>(value: T) =>
  Object.fromEntries(
    Object.entries(value).map(([key, val]) => [key, val.toString()])
  );

// Returns { [k: string]: any; }
objectValuesToStrings({
  foo: 123,
  bar: 456,
});

export {};
