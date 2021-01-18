# Getting Started

Animated typing in ~2.6 kb 🐡 with React Hook.

[![npm](https://img.shields.io/npm/v/react-darkreader?color=orange)](https://www.npmjs.com/package/react-image-dangling) ![npm](https://img.shields.io/npm/dt/react-darkreader) [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://github.com/umijs/dumi) ![License](https://img.shields.io/github/license/Turkyden/react-darkreader) [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/react-darkreader/badge)](https://www.jsdelivr.com/package/npm/react-darkreader)

Live Demo ✨ [https://react-darkreader.vercel.app](https://react-darkreader.vercel.app)

<!-- ![darkreader](https://darkreader.org/images/darkreader-icon-256x256.png) -->

## 📦 Install

```bash
yarn add use-typical
```

Or you can:

```bash
npm install use-typical
```

## 🚀 Usage

You can create typing animate effects by the react hook `useTypical`

```tsx | pure
import React from 'react';
import useTypical from 'use-typical';

export default () => {
  const ref = useTypical({
    steps: ['Hello', 1000, 'Hello world!', 500],
    loop: Infinity,
    speed: 60,
  });

  return <p ref={ref}></p>;
};
```

To display the blink effects, you can add the classname `typingWrapper` on the dom.

```diff
-<p ref={ref}></p>
+<p ref={ref} className="typingWrapper"></p>
```

Such as a blink cursor style like this.

```css
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

## 📔 API

### Hook

```typescript | pure
const [isDark, toggle, collectCSS] = useDarkreader(defaultDarken: boolean, options?: Options);
```

with a toggle button as ui.

```tsx | pure
<Switch isDark={isDark} onToggle={toggle} />
```

### Result

| Params     | Description                                             | Type                          |
| ---------- | ------------------------------------------------------- | ----------------------------- |
| isDark     | The status of current darkmode, support `true`, `false` | `boolean`                     |
| toggle     | The function for toggling the darkmode.                 | `() => void`                  |
| collectCSS | The async function for collecting the css of darkmode.  | `async () => Promise<string>` |

### Params

| Params        | Description                          | Type      | Default |
| ------------- | ------------------------------------ | --------- | ------- |
| defaultDarken | The default status of the darkreader | `boolean` | false   |

### Options

| Params     | Description                           | Type     | Default |
| ---------- | ------------------------------------- | -------- | ------- |
| brightness | The brightness properties of darkmode | `number` | 100     |
| contrast   | The contrast properties of darkmode   | `number` | 90      |
| sepia      | The sepia properties of darkmode      | `number` | 10      |

## 🔢 Coming Soon

- [ ] followSystemColorScheme
- [ ] localstorge
- [ ] playground for editing the config online

## 🔨 Contribute

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

## License

[MIT](https://github.com/Turkyden/react-darkreader/blob/main/LICENSE)
