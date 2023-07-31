enum AnimalType {
  DUCK = 'duck',
  BEAVER = 'beaver',
}

interface Duck {
  type: AnimalType.DUCK;
  hasBeak: true;
  isAquatic: true;
}

interface Beaver {
  type: AnimalType.BEAVER;
  hasFur: true;
  isAquatic: true;
}

type Animal = Duck | Beaver;

const tellMeAbout = (animal: Animal) => {
  if (animal.type === AnimalType.DUCK) {
    console.log(animal.hasBeak);
    // Property 'hasFur' does not exist on type 'Duck'.
    console.log(animal.hasFur);
  } else {
    console.log(animal.hasFur);
    // Property 'hasBeak' does not exist on type 'Beaver'.
    console.log(animal.hasBeak);
  }

  if ('hasBeak' in animal) {
    console.log(animal.hasBeak);
    // Property 'hasFur' does not exist on type 'Duck'.
    console.log(animal.hasFur);
  }
};

tellMeAbout({
  type: AnimalType.DUCK,
  hasBeak: true,
  isAquatic: true,
});

export {};
