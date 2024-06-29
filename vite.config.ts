import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/index.ts',
      name: 'common-components-test',
      formats: ['umd', 'cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    modules: {
      generateScopedName: 'common-components-test__[name]__[local]___[hash:base64:5]',
    },
  },
});
