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

// Interface 'Platypus' cannot simultaneously extend types 'Duck' and 'Beaver'.
// Named property 'makesSound' of types 'Duck' and 'Beaver' are not identical.
interface Platypus extends Duck, Beaver {}

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
