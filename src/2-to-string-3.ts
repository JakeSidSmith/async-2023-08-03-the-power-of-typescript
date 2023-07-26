// Type 'string' is not assignable to type '`${T}`'.
const toString = <T extends number>(value: T): `${T}` => value.toString();

// Returns "123"
toString(123);

export {};
