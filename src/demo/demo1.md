## Default

You can typing the text animation step by step.

```tsx
import React from 'react';
import useTypical from 'use-typical';

export default () => {
  const ref = useTypical({
    steps: ['Hello', 1000, 'Hello World !', 500],
    loop: Infinity,
    speed: 60,
  });

  return <h2 ref={ref}></h2>;
};
```
