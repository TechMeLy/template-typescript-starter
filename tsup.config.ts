import pkg from './package.json';
import { Options } from 'tsup';

const external = [
  ...new Set([...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {})]),
];
const isProd = process.env.NODE_ENV === 'production';

const options: Options = {
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  pure: isProd ? ['console.log', 'console.warn', 'debugger'] : undefined,
  sourcemap: true,
  splitting: false,
  dts: true,
  external,
  ignoreWatch: ['**/{.git,node_modules}/**', 'dist', 'src/**/*.spec.ts'],
};

export default options;
