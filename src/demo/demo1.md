## Default

You can import to your app with default export.

```tsx
import React from 'react';
import useTypical from 'use-typical';

export default () => {
  const ref = useTypical({
    steps: ['Hello', 1000, 'Hello World !', 500],
    loop: Infinity,
    speed: 60,
  });

  return <p ref={ref}></p>;
};
```
