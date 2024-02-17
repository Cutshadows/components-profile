import { defineConfig } from 'vite';
// import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/index.ts',
      name: 'components',
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
//   plugins: [
//     dts({
//       insertTypesEntry: true,
//     }),
//   ],
  css: {
    modules: {
      generateScopedName: 'components-ui__[name]__[local]___[hash:base64:5]',
    },
  },
});
