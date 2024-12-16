// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//   },
//   server: {
//     host: '0.0.0.0',
//     port: 8000,
//     historyApiFallback: true,
//   },
//   base: '/',
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../server/public', // Output the build files to the server's public directory
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,  // Important for single-page apps (SPA) with React Router
  },
});

