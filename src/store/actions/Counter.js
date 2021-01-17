//action type
const prefix = 'COUNTER';
const PLUS = `${prefix}/PLUS`;

//function creating action
export const plus = () => ({
  type: PLUS,
});
