const objectValuesToStrings = <const T extends Record<string, any>>(value: T) =>
  Object.fromEntries(
    Object.entries(value).map(([key, val]) => [key, val.toString()])
  ) as {
    [K in keyof T]: `${T[K]}`;
  };

// Returns { readonly foo: "123"; readonly bar: "456"; }
objectValuesToStrings({
  foo: 123,
  bar: 456,
});

export {};
