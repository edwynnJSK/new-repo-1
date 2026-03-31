const carTypes = {
    arc: "1",
    arc2: "2",
    arc3: "3"
} as const;

const kev: keyof typeof carTypes = "arc";

console.log("Type of car: " + carTypes[kev]);
