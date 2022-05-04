import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import ReactPlugin from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    ReactPlugin(),
    {
      name: 'vite-plugin-ruby:ssr',
      config (config) {
        if (!config.build.ssr)
          return

        // Remove any entrypoints configured by Vite Ruby.
        delete config.build.rollupOptions.input
        delete config.build.rollupOptions.output

        return {
          build: {
            outDir: `${config.build.outDir}-ssr`,
            rollupOptions: {
              input: {
                ssr: 'app/frontend/ssr/ssr.jsx',
              },
            },
          },
        }
      },
    },
  ],
})
