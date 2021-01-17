//action type
export const prefix = 'COUNTER';
export const PLUS = `${prefix}/PLUS`;
export const MINUS = `${prefix}/MINUS`;

//function creating action
export const plus = () => ({
  type: PLUS,
});

export const minus = () => ({
  type: MINUS,
});
