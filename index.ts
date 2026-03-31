const carTypes = {
    arc: "1",
    arc2: "2",
    arc3: "3"
} as const;

const kev: keyof typeof carTypes = "arc";

console.log("Type of car: " + carTypes[kev]);

interface User {
    id: number,
    name: string,
    telephone: string,
    isActive: boolean;
    calc: () => void;
}

const user: User = {
    id: 2,
    name: "User1",
    telephone: "1234567890",
    isActive: true,
    calc: () => console.log("new Func")
}

user.calc();