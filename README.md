# Getting Started

Animated typing in ~2.6 kb 🐡 with React Hook.

[![npm](https://img.shields.io/npm/v/use-typical?color=orange)](https://www.npmjs.com/package/react-image-dangling) ![npm](https://img.shields.io/npm/dt/use-typical) [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://github.com/umijs/dumi) ![License](https://img.shields.io/github/license/Turkyden/use-typical) [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/use-typical/badge)](https://www.jsdelivr.com/package/npm/use-typical)

Live Demo ✨ [https://use-typical.vercel.app](https://use-typical.vercel.app)

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
const ref = useTypical(options: Options);
```

### Result

| Params | Description                    | Type                            |
| ------ | ------------------------------ | ------------------------------- |
| ref    | The ref of typical text wraper | `React.RefObject<HTMLDocument>` |

### Options

| Params | Description                                              | Type                              | Default |
| ------ | -------------------------------------------------------- | --------------------------------- | ------- |
| steps  | Step array assign to the typing                          | `Array<string, number, Function>` | -       |
| loop   | The number of loop typing animation effect, **Infinity** | `number`                          | 1       |
| speed  | The speed of typing animation effect                     | `number`                          | 60      |

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

[MIT](https://github.com/Turkyden/use-typical/blob/main/LICENSE)
