class InvalidJSONError extends Error {}

type Whitespace = ' ' | '\n' | '\t';

type StripLeadingWhitespace<T extends string> =
  T extends `${Whitespace}${infer Rest}` ? StripLeadingWhitespace<Rest> : T;
type StripTrailingWhitespace<T extends string> =
  T extends `${infer Rest}${Whitespace}` ? StripTrailingWhitespace<Rest> : T;

type StripWhitespace<T extends string> = StripTrailingWhitespace<
  StripLeadingWhitespace<T>
>;

type GetFirstValueAndNextString<T extends string> = T extends `"${infer Value}"`
  ? [Value, null]
  : T extends 'true'
  ? true
  : T extends 'false'
  ? false
  : T extends 'null'
  ? null
  : T extends `${number}`
  ? T extends `${infer Value}`
    ? [Value, null]
    : [InvalidJSONError, null]
  : T extends `{${infer Middle}}`
  ? [ParseObjectKeys<StripWhitespace<Middle>>, null]
  : T extends `"${infer Value}",${infer Rest}`
  ? [Value, Rest]
  : T extends `true,${infer Rest}`
  ? [true, Rest]
  : T extends `false,${infer Rest}`
  ? [false, Rest]
  : T extends `null,${infer Rest}`
  ? [null, Rest]
  : T extends `${number},${string}`
  ? T extends `${infer Value},${infer Rest}`
    ? [Value, Rest]
    : [InvalidJSONError, null]
  : T extends `{${infer Middle}},${infer Rest}`
  ? [ParseObjectKeys<StripWhitespace<Middle>>, Rest]
  : [InvalidJSONError, null];

type ParseObjectKeys<T extends string> =
  T extends `"${infer Key}":${infer Rest}`
    ? GetFirstValueAndNextString<StripWhitespace<Rest>> extends [
        infer Value,
        infer Next,
      ]
      ? {
          [K in Key]: Value;
        } & (Next extends string ? ParseObjectKeys<StripWhitespace<Next>> : {})
      : InvalidJSONError
    : never;

type JSONParseStripped<T extends string> = T extends `"${infer Middle}"`
  ? `${Middle}`
  : T extends `{${infer Middle}}`
  ? ParseObjectKeys<StripWhitespace<Middle>>
  : T extends 'true'
  ? true
  : T extends 'false'
  ? false
  : T extends 'null'
  ? null
  : InvalidJSONError;

type JSONParse<T extends string> = JSONParseStripped<StripWhitespace<T>>;

const parseJson = <T extends string>(value: T) =>
  JSON.parse(value) as JSONParse<T>;

// { foo: true; } & { bar: "baz"; } & { nested: { hello: "world"; }; }
const result = parseJson(`
{
  "foo": true,
  "bar": "baz",
  "nested": {
    "hello": "world"
  }
}
`);

// true
console.log(result.foo);

// "baz"
console.log(result.bar);

// "world"
console.log(result.nested.hello);

export {};
