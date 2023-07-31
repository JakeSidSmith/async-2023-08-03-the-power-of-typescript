const toGetter = (value: string) =>
  `get${value.charAt(0).toUpperCase()}${value.slice(1)}`;

// Returns string
toGetter('name');

export {};
