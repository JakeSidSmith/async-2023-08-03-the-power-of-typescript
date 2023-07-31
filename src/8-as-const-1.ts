type BaseThing = Record<string, number>;

const thing: BaseThing = {
  foo: 123,
  bar: 456,
};

const selfObject = <T extends Record<string, any>>(value: T) => value;

// Returns Record<string, number>
selfObject(thing);

export {};
