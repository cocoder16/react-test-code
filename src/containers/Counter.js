import React, { useState } from 'react';

import Counter from 'components/Counter';

function CounterContainer() {
  const [result, setResult] = useState(0);

  const onClickPlusBtn = () => {
    setResult(result + 1);
  };

  const onClickMinusBtn = () => {
    setResult(result - 1);
  };

  return (
    <Counter
      onClickPlusBtn={onClickPlusBtn}
      onClickMinusBtn={onClickMinusBtn}
      result={result}
    />
  );
}

export default CounterContainer;
