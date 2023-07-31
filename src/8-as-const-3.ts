type BaseThing = Record<string, number>;

const thing = {
  foo: 123,
  bar: 456,
} as const satisfies BaseThing;

const selfObject = <T extends Record<string, any>>(value: T) => value;

// Returns { readonly foo: 123; readonly bar: 456; }
selfObject(thing);

export {};
