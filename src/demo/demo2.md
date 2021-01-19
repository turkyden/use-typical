## Blink Effect ✨

Display the blink animation effects. 👉 <span class="typingWrapper"></span>

```tsx
/**
 * background: '#374151'
 */

import React from 'react';
import useTypical from 'use-typical';

export default () => {
  const ref = useTypical({
    steps: ['Hello', 1000, 'Hello World !', 500],
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

You can add the classname `typingWrapper` on the dom.

```diff
-<p ref={ref}></p>
+<p ref={ref} className="typingWrapper"></p>
```

Such as a blink cursor style like this.

```css | pure
.typingWrapper::after {
  content: '|';
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
```
