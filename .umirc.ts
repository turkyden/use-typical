import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'use-typical',
  logo: 'https://darkreader.org/images/darkreader-icon-256x256.png',
  favicon: 'https://darkreader.org/images/darkreader-icon-256x256.png',
  hash: true,
  outputPath: 'docs-dist',
  base: `/`,
  publicPath: '/',
  theme: {
    '@c-primary': '#454d64',
  },
  headScripts: [
    `window.onload = () => {
      document.querySelector('.__dumi-default-menu-logo').innerHTML = '<div class="circles"><div></div><div></div><div></div><span></span></div>'
    }`,
  ],
  styles: [
    `https://cdn.jsdelivr.net/npm/antd@4.10.0/dist/antd.min.css`,
    `
    /** 杨任东竹石体-Bold **/
    @font-face {
      font-family: "webfont";
      font-display: swap;
      src: url("//at.alicdn.com/t/webfont_nbi1nseljed.eot"); /* IE9*/
      src: url("//at.alicdn.com/t/webfont_nbi1nseljed.eot?#iefix")
          format("embedded-opentype"),
        /* IE6-IE8 */ url("//at.alicdn.com/t/webfont_nbi1nseljed.woff2")
          format("woff2"),
        url("//at.alicdn.com/t/webfont_nbi1nseljed.woff") format("woff"),
        /* chrome、firefox */ url("//at.alicdn.com/t/webfont_nbi1nseljed.ttf")
          format("truetype"),
        /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
          url("//at.alicdn.com/t/webfont_nbi1nseljed.svg#杨任东竹石体-Bold")
          format("svg"); /* iOS 4.1- */
    }

    .typingWrapper-cn {
      font-family: "webfont" !important;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
    }
    `,
    `/** Typical Blink Effect **/
    .typingWrapper::after {
      content: "|";
      animation: blink 1s infinite step-start;
    }
    
    @keyframes blink {
      50% { opacity: 0; }
    }
    `,
    `/** Logo Style **/
    .__dumi-default-menu-header .__dumi-default-menu-logo{
      background: none !important;
    }
    .circles {
      width: 64px;
      height: 64px;
      position: relative;
      perspective: 50000px;
      color: #454d64;
    }
    .circles span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 18.4%;
      height: 18.4%;
      border-radius: 100%;
      background: currentColor;
    }
    .circles div {
      position: absolute;
      width: 100%;
      height: 100%;
      border-left: 0.4vmin solid;
      border-top: 0.4vmin solid transparent;
      border-radius: 100%;
    }
    .circles div:nth-child(1) {
      -webkit-animation: anim-1 1s linear infinite;
              animation: anim-1 1s linear infinite;
    }
    .circles div:nth-child(2) {
      -webkit-animation: anim-2 1s linear infinite;
              animation: anim-2 1s linear infinite;
    }
    .circles div:nth-child(3) {
      -webkit-animation: anim-3 1s linear infinite;
              animation: anim-3 1s linear infinite;
    }

    @-webkit-keyframes anim-1 {
      from {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
      }
    }

    @keyframes anim-1 {
      from {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
      }
    }
    @-webkit-keyframes anim-2 {
      from {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
      }
    }
    @keyframes anim-2 {
      from {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
      }
    }
    @-webkit-keyframes anim-3 {
      from {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
      }
    }
    @keyframes anim-3 {
      from {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
      }
    }
    `,
  ],
});
