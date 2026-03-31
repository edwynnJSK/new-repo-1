export interface Animal1 {
  greet: () => void;
}

class Perro implements Animal1 {
  greet() {
    console.log("Ladra");
  }
}

class Gato implements Animal1{
    greet(){
        console.log("Miau");
    }
}

const AnymalType = {
    perro: Perro,
    gato: Gato,
} as const;



export class AnimalFactory{
    createAnimal(animal: keyof typeof AnymalType){
        return new AnymalType[animal]();
    }
}