const sayHello = (value: string) => {
  console.log(`Hello, ${value}`);
};

let name = 'Async';
// Type 'number' is not assignable to type 'string'.
name = 123;

sayHello(name);

export {};
