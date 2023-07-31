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

type Platypus = Duck & Beaver;

const tellMeAbout = (animal: Platypus) => {
  // Property 'makesSound' does not exist on type 'never'.
  console.log(animal.makesSound);
};

tellMeAbout({
  // Type 'boolean' is not assignable to type 'never'.
  hasBeak: true,
  hasFur: true,
  isAquatic: true,
  makesSound: 'Quack',
});

export {};
