const sayHello = (value: string) => {
  console.log(`Hello, ${value}`);
};

let name: string | number = 'Async';

name = 123;
// Argument of type 'number' is not assignable to parameter of type 'string'.
sayHello(name);

export {};
