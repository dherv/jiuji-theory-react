const teachers = [
  { id: 1, name: 'X' },
  { id: 2, name: 'Y' },
];
const types = [
  { id: 1, name: 'offensive' },
  { id: 2, name: 'defensive' },
];
const positions = [
  { id: 1, name: 'open guard' },
  { id: 2, name: 'half guard' },
];
const techniques = [
  { id: 1, name: 'triangle' },
  { id: 2, name: 'kimura' },
];

const FormBase = {
  teachers,
  types,
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
