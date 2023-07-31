type BaseThing = Record<string, number>;

const thing = {
  foo: 123,
  bar: 456,
} satisfies BaseThing;

const selfObject = <T extends Record<string, any>>(value: T) => value;

// Returns { foo: number; bar: number; }
selfObject(thing);

export {};
