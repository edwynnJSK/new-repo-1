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