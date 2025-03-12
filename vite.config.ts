import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './src/App/routes',
      generatedRouteTree: "./src/App/routeTree.gen.ts",}),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
})
