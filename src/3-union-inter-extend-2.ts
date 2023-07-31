interface Duck {
  hasBeak: true;
  isAquatic: true;
}

interface Beaver {
  hasFur: true;
  isAquatic: true;
}

type Platypus = Duck & Beaver;

const tellMeAbout = (animal: Platypus) => {
  console.log(animal.hasBeak);
  console.log(animal.hasFur);
  console.log(animal.isAquatic);
};

tellMeAbout({
  hasBeak: true,
  hasFur: true,
  isAquatic: true,
});

export {};
