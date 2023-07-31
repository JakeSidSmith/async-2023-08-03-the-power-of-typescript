interface User {
  id: string;
  name: string;
}

interface Address {
  id: string;
  street: string;
  city: string;
  country: string;
}

interface API {
  user: User;
  address: Address;
}

type ToGetter<T extends string> = T extends `${infer First}${infer Rest}`
  ? `get${Uppercase<First>}${Rest}`
  : never;

const toGetter = <T extends string>(value: T) =>
  `get${value.charAt(0).toUpperCase()}${value.slice(1)}` as ToGetter<T>;

type UnionToIntersection<T> = (
  T extends any ? (arg: T) => void : never
) extends (arg: infer A) => void
  ? A
  : never;

// {} & ensures that the return type is an object
type ToAPI<T extends Record<string, any>> = {} & UnionToIntersection<
  keyof T extends infer K
    ? K extends string
      ? {
          [P in ToGetter<K>]: () => Promise<T[K]>;
        }
      : {}
    : {}
>;

const createAPI = <T extends Record<string, any>>(
  models: readonly (keyof T)[]
) => {
  return models.reduce((acc, model) => {
    if (typeof model !== 'string') {
      return acc;
    }

    return {
      ...acc,
      [toGetter(model)]: () => {
        fetch(`https://api.example.com/${model}`).then((response) =>
          response.json()
        );
      },
    };
  }, {} as ToAPI<T>);
};

// Returns ToAPI<API> a.k.a { getUser: () => Promise<User>; getAddress: () => Promise<Address>; }
const api = createAPI<API>(['user', 'address']);

// Returns Promise<User>
api.getUser();

// Returns Promise<Address>
api.getAddress();

export {};
