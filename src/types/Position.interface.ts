enum Position {
  offensive,
  defensive,
}

export type PositionString = keyof typeof Position;

export interface IPosition {
  id: number;
  name: string;
}
