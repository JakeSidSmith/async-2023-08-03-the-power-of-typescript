const sayHello = (value: string | number) => {
  console.log(`Hello, ${value}`);
};

const name = 'Async';

sayHello(name);

const anotherName = 123;

sayHello(anotherName);

export {};
