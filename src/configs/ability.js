import { ABILITY_NAMES } from '../constants/names';

const { VIEW, EDIT, DELETE } = ABILITY_NAMES;

export const USER_ABILITY = {
  [VIEW]: 2,
  [EDIT]: 4,
  [DELETE]: 8,
};

export const USER_ABILITY_LISTS = {
  2: [ VIEW ],
  4: [ EDIT ],
  6: [ VIEW, EDIT ],
  8: [ DELETE ],
  10: [ VIEW, DELETE ],
  12: [ EDIT, DELETE ],
  14: [ VIEW, EDIT, DELETE ],
};
