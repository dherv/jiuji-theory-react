import { TechniqueProps } from './Technique.sample';

export const PageHomeProps = {
  techniques: [
    { ...TechniqueProps, id: 1, selected: false },
    { ...TechniqueProps, id: 2, selected: false },
    { ...TechniqueProps, id: 3, selected: false },
    { ...TechniqueProps, id: 4, selected: false },
    { ...TechniqueProps, id: 5, selected: false },
    { ...TechniqueProps, id: 6 },
  ],
};
