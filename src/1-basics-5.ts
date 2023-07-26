const sayHello = (value: string) => {
  console.log(`Hello, ${value}`);
};

let name: string | number = 'Async';

name = 123;

if (typeof name === 'string') {
  sayHello(name);
}

export {};
