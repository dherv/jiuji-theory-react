import { IMove } from '../types/Move.interface';
import { ISubmission } from '../types/Submission.interface';
import { ITechniqueType } from '../types/TechniqueType.interface';

const teachers = [
  { id: 1, name: 'X' },
  { id: 2, name: 'Y' },
];
const moves: IMove[] = [
  { id: 1, name: 'offensive' },
  { id: 2, name: 'defensive' },
];
const positions = [
  { id: 1, name: 'open guard' },
  { id: 2, name: 'half guard' },
];
const techniques: ISubmission[] = [
  { id: 1, name: 'triangle' },
  { id: 2, name: 'kimura' },
];

const FormBase = {
  teachers,
  moves,
  positions,
  techniques,
};

export const CreateFormProps = {
  ...FormBase,
  steps: [],
};

export const EditFormProps = {
  ...FormBase,
  steps: [{ name: 'step 1' }],
};

export const CreateEditFormProps = {
  ...FormBase,
  steps: [{ name: 'step 1' }],
};
