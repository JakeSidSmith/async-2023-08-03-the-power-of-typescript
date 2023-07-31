const toHumanFriendlyBoolean = <T extends boolean>(value: T) =>
  (value ? 'Yes' : 'No') as T extends true ? 'Yes' : 'No';

toHumanFriendlyBoolean(true);

export {};
