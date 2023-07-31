const selfObject = <T extends Record<string, any>>(value: T) => value;

// Returns { foo: number; bar: number; }
selfObject({
  foo: 123,
  bar: 456,
});

export {};
