import { IGuard } from '../types/Guard.interface';
import { IPosition } from '../types/Position.interface';
import { ISubmission } from '../types/Submission.interface';
import { ITechniqueType } from '../types/TechniqueType.interface';

const teachers = [
  { id: 1, name: 'X' },
  { id: 2, name: 'Y' },
];
const positions: IPosition[] = [
  { id: 1, name: 'offensive' },
  { id: 2, name: 'defensive' },
];
const guards: IGuard[] = [
  { id: 1, name: 'open guard' },
  { id: 2, name: 'half guard' },
];
const submissions: ISubmission[] = [
  { id: 1, name: 'kimura' },
  { id: 2, name: 'triangle' },
];
const videos: never[] = [];

const FormBase = {
  teachers,
  guards,
  positions,
  submissions,
  videos,
};

export const CreateFormProps = {
  ...FormBase,
  steps: [],
};

export const EditFormProps = {
  ...FormBase,
  steps: [{ text: 'step 1', order: 1 }],
};

export const CreateEditFormProps = {
  ...FormBase,
  steps: [{ text: 'step 1', order: 1 }],
};
