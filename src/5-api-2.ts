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

const createAPI = <T extends readonly (keyof API)[]>(models: T) => {
  return models.reduce(
    (acc, model) => {
      return {
        ...acc,
        [`get${model.charAt(0).toUpperCase()}${model.slice(1)}`]: () => {
          fetch(`https://api.example.com/${model}`).then((response) =>
            response.json()
          );
        },
      };
    },
    {} as Record<T[number], () => Promise<any>>
  );
};

// Returns Record<"user" | "address", () => Promise<any>>
const api = createAPI(['user', 'address']);

// Property 'getUser' does not exist on type 'Record<"user" | "address", () => Promise<any>>'.
api.getUser();

export {};
