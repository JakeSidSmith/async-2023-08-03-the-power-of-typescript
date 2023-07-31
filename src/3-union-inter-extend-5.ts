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

interface Platypus
  extends Omit<Duck, 'makesSound'>,
    Omit<Beaver, 'makesSound'> {
  makesSound: 'Woof?';
}

const tellMeAbout = (animal: Platypus) => {
  console.log(animal.makesSound);
};

tellMeAbout({
  hasBeak: true,
  hasFur: true,
  isAquatic: true,
  makesSound: 'Woof?',
});

export {};
