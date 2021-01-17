//action type
const prefix = 'COUNTER';
const PLUS = `${prefix}/PLUS`;
const MINUS = `${prefix}/MINUS`;

//function creating action
export const plus = () => ({
  type: PLUS,
});

export const minus = () => ({
  type: MINUS,
});
