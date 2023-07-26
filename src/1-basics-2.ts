const sayHello = (value: string) => {
  console.log(`Hello, ${value}`);
};

const name = 123;
// Argument of type 'number' is not assignable to parameter of type 'string'.
sayHello(name);

export {};
