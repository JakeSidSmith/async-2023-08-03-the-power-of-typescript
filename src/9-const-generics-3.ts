const objectValuesToStrings = <T extends Record<string, any>>(value: T) =>
  Object.fromEntries(
    Object.entries(value).map(([key, val]) => [key, val.toString()])
  ) as Record<keyof T, string>;

// Returns Record<"foo" | "bar", string>
objectValuesToStrings({
  foo: 123,
  bar: 456,
});

export {};
