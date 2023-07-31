// [...Array(95)].map((_, index) => String.fromCharCode(index + 32)).join('')
type CharOrder =
  ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

type SortSingle<
  A extends string,
  B extends string,
> = CharOrder extends `${A}${B}${string}`
  ? `${A}${B}`
  : CharOrder extends `${string}${A}${B}`
  ? `${A}${B}`
  : CharOrder extends `${string}${A}${string}${B}${string}`
  ? `${A}${B}`
  : CharOrder extends `${string}${A}${string}${B}`
  ? `${A}${B}`
  : CharOrder extends `${A}${string}${B}${string}`
  ? `${A}${B}`
  : `${B}${A}`;

type SortOnce<T extends string> = T extends `${infer A}${infer B}${infer C}`
  ? SortSingle<A, B> extends `${infer A2}${infer B2}`
    ? `${A2}${SortString<`${B2}${C}`>}`
    : never
  : T;

type SortInternal<
  T extends string,
  R extends string,
> = R extends `${string}${infer B}`
  ? SortInternal<SortOnce<T>, B>
  : SortOnce<T>;

type SortString<T extends string> = SortInternal<T, T>;

const sortString = <T extends string>(value: T) =>
  value.split('').sort().join('') as SortString<T>;

// Returns " !,AHcellnosy"
sortString('Hello, Async!');

export {};
