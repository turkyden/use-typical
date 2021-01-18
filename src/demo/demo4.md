## Vertical

RL with `vertical-rl`

```tsx
import React from 'react';
import useTypical from 'use-typical';

const ChineseTypingStyle = {
  fontSize: '2rem',
  height: '20rem',
  display: 'flex',
  justifyContent: 'flex-end',
  width: '80%',
  margin: 'auto',
};

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

  return (
    <div style={ChineseTypingStyle}>
      <p
        ref={ref}
        style={{ writingMode: 'vertical-rl' }}
        className="typingWrapper"
      />
    </div>
  );
};
```
