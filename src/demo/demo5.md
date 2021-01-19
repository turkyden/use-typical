## Vertical

In ancient Chinese, the RL mode is recommended with `vertical-rl`.

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
        className="typingWrapper-cn"
      />
    </div>
  );
};
```

You can add the `.typingWrapper-cn` as className.

```diff
-<p ref={ref}></p>
+<p ref={ref} className="typingWrapper-cn"></p>
```

Such as a font-family named **「杨任东竹石体」** style like this. Powered by 🀄 [iconfont.cn](https://www.iconfont.cn/webfont?spm=a313x.7781068.0.d81ec59f2#!/webfont/index)

```css | pure
/** 杨任东竹石体-Bold **/
@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('//at.alicdn.com/t/webfont_nbi1nseljed.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/webfont_nbi1nseljed.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('//at.alicdn.com/t/webfont_nbi1nseljed.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_nbi1nseljed.woff') format('woff'), /* chrome、firefox */
      url('//at.alicdn.com/t/webfont_nbi1nseljed.ttf') format('truetype'),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url('//at.alicdn.com/t/webfont_nbi1nseljed.svg#杨任东竹石体-Bold') format('svg'); /* iOS 4.1- */
}

.typingWrapper-cn {
  font-family: 'webfont' !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
```
