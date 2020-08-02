enum TechniqueType {
  location,
  club,
  teacher,
}

export type TechniqueTypeString = keyof typeof TechniqueType;

export interface ITechniqueType {
  id: number;
  name: string;
}
