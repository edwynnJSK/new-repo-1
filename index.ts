import { AnimalFactory, Animal1 } from "./animalFactory";

const carTypes = {
  arc: "1",
  arc2: "2",
  arc3: "3",
} as const;

const kev: keyof typeof carTypes = "arc";

console.log("Type of car: " + carTypes[kev]);

interface Auto {
  id: number;
  brand: string;
  model: string;
  motor: string;
  color: string;
  showBrand: () => void;
}

const auto: Auto = {
  id: 1,
  brand: "Ferrari",
  color: "Red",
  model: "Enzo",
  motor: "V12",
  showBrand: () => console.log(`Brand is: ${auto.brand}`)
};

auto.showBrand();

interface Animal {
  id: number,
  name: string,
  tipo: string,
  height: number,
  showType : () => void
}

const animal: Animal = {
  id:1,
  name: "Dog",
  tipo: "terrestrial",
  height: 46, 
  showType: () => console.log(`Animal type: ${animal.tipo}`)
}

animal.showType();

const factory = new AnimalFactory();

const animalf: Animal1 = factory.createAnimal("gato");
animalf.greet();