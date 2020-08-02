enum BeltType {
  white,
  blue,
  purple,
  brown,
  black,
}

export type BeltTypeStrings = keyof typeof BeltType;

export interface IBelt {
  id: number;
  name: BeltTypeStrings;
}
