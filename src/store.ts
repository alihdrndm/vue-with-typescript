export interface Dog {
  name: string;
  age: number;
  breed?: string;
}

export function getDogs(): Dog[] {
  return [
    { name: "Builder", age: 2 },
    { name: "Rott", age: 7, breed: "Rollweiler" }
  ];
}
