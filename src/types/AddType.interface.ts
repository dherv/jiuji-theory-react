enum AddType {
  location,
  club,
  teacher,
}

export type AddTypeString = keyof typeof AddType;

export interface IAddType {
  id: number;
  name: string;
}
