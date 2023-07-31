interface Duck {
  hasBeak: true;
  isAquatic: true;
  makesSound: 'Quack';
}

interface Beaver {
  hasFur: true;
  isAquatic: true;
  makesSound: 'I have no idea';
}

type Merge<A extends Record<string, any>, B extends Record<string, any>> = {
  [K in keyof A | keyof B]: K extends keyof A
    ? K extends keyof B
      ? A[K] | B[K]
      : A[K]
    : K extends keyof B
    ? B[K]
    : never;
};

type Platypus = Merge<Duck, Beaver>;

const tellMeAbout = (animal: Platypus) => {
  console.log(animal.makesSound);
};

tellMeAbout({
  hasBeak: true,
  hasFur: true,
  isAquatic: true,
  makesSound: 'Quack',
});

export {};
