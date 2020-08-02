import { BeltTypeStrings, IBelt } from '../types/Belt.interface';

export const AccountFormProps = {
  clubs: [
    { id: 1, name: 'club 1' },
    { id: 2, name: 'club 2' },
  ],
  locations: [
    { id: 1, name: 'location 1' },
    { id: 2, name: 'location 2' },
  ],
  belts: [
    { id: 1, name: 'white' as BeltTypeStrings },
    { id: 2, name: 'blue' as BeltTypeStrings },
  ],
  types: [
    { id: 1, name: 'location' },
    { id: 2, name: 'clubs' },
    { id: 3, name: 'belts' },
  ],
};
