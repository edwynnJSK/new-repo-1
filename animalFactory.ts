export interface Food {
  cook: () => void;
}

class Pizza implements Food {
  cook() {
    console.log("cocinando pizza");
  }
}

class Lasagna implements Food {
  cook() {
    console.log("cocinando lasaña");
  }
}

const FoodType = {
  pizza: Pizza,
  lasagna: Lasagna,
} as const;

export class FoodFactory {
  createAnimal(food: keyof typeof FoodType) {
    return new FoodType[food]();
  }
}
