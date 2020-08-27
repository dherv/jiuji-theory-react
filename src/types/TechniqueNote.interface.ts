import { IStep } from './Step.interface';

export interface ITechniqueNote {
  id: number;
  name: string;
  teacher: string;
  position: string;
  guard: string;
  submission: string;
  selected: boolean;
  steps: IStep[];
}
