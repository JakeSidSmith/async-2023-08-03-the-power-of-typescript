const toHumanFriendlyBoolean = <T extends boolean>(
  value: T
): T extends true ? 'Yes' : 'No' => (value ? 'Yes' : 'No');

toHumanFriendlyBoolean(true);

export {};
