import { IGuard } from './Guard.interface';
import { IPosition } from './Position.interface';
import { ISubmission } from './Submission.interface';
import { ITeacher } from './Teacher.interface';

export interface ITechnique {
  id: number;
  name: string;
  teacher: ITeacher;
  position: IPosition;
  guard: IGuard;
  submission: ISubmission;
}
