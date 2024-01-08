import { hmrPlugin } from '../../index.mjs';

export default {
  rootDir: '../..',
  open: 'packages/dev-server-hmr/demo/lit-html/index.html',
  nodeResolve: true,
  plugins: [hmrPlugin()],
};
