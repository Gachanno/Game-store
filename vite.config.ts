import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './src/App/routes',
      generatedRouteTree: "./src/App/routeTree.gen.ts",}),
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      webp: { quality: 80 },
      svg: {
          plugins: [
              { name: 'removeViewBox' },
              { name: 'sortAttrs' },
          ],
      },
  }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
})
