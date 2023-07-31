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

const createAPI = <T extends readonly (keyof API)[]>(models: T) => {
  return models.reduce(
    (acc, model) => {
      return {
        ...acc,
        [toGetter(model)]: () => {
          fetch(`https://api.example.com/${model}`).then((response) =>
            response.json()
          );
        },
      };
    },
    {} as Record<ToGetter<T[number]>, () => Promise<any>>
  );
};

// Returns Record<"getUser" | "getAddress", () => Promise<any>>
const api = createAPI(['user', 'address']);

// Returns Promise<any>
api.getUser();

export {};
