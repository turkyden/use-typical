## Emoji 😎

You can typing the emoji as a text. https://emoji.muan.co/

```tsx
/**
 * background: '#374151'
 */

import React from 'react';
import useTypical from 'use-typical';

export default () => {
  const ref = useTypical({
    steps: ['Hello', 1000, 'Hello World ! 👋', 500],
    loop: Infinity,
    speed: 60,
  });

  return (
    <p
      ref={ref}
      className="typingWrapper"
      style={{ textAlign: 'center', color: '#fff', fontSize: '2rem' }}
    />
  );
};
```
