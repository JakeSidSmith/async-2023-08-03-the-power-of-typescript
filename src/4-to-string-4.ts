const toString = <T extends number>(value: T) => value.toString() as `${T}`;

// Returns "123"
toString(123);

export {};
