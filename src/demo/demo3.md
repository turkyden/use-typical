## Chinese

You can import to your app with default export.

```tsx
import React from 'react';
import useTypical from 'use-typical';

export default () => {
  const ref = useTypical({
    steps: [
      '天行健，',
      1000,
      '天行健，君子以自强不息；',
      500,
      '天行健，君子以自强不息；地势坤，',
      1000,
      '天行健，君子以自强不息；地势坤，君子以厚德载物。',
      500,
    ],
    loop: 4,
    speed: 200,
  });

  return <p ref={ref}></p>;
};
```
