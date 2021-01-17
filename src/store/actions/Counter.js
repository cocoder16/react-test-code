//action type
const prefix = 'COUNTER';
const PLUS = `${prefix}/PLUS`;

//function creating action
export const changePost = id => ({
  type: CHANGE_POST,
  payload: id,
});
