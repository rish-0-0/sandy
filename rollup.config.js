import { wasm } from '@rollup/plugin-wasm';

export default [{
  input: 'index.js',
  output: {
    dir: 'dist',
    format: 'iife'
  },
  plugins: [
    wasm(),
  ],
}];