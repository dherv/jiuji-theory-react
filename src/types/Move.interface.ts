enum Move {
  offensive,
  defensive,
}

export type MoveStrings = keyof typeof Move;
export interface IMove {
  id: number;
  name: string;
}
