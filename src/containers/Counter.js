import React, { useState } from 'react';

import Counter from 'components/Counter';

function CounterContainer() {
  const [result, setResult] = useState(0);

  const onClickPlusBtn = () => {
    setResult(result + 1);
  };

  return <Counter onClickPlusBtn={onClickPlusBtn} result={result} />;
}

export default CounterContainer;
