const toHumanFriendlyBoolean = <T extends boolean>(
  value: T
  // Type '"Yes" | "No"' is not assignable to type 'T extends true ? "Yes" : "No"'.
): T extends true ? 'Yes' : 'No' => (value ? 'Yes' : 'No');

toHumanFriendlyBoolean(true);

export {};
