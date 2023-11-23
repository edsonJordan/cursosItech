import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import pluginRewriteAll from 'vite-plugin-rewrite-all';
// import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    /* createHtmlPlugin({
      minify: true,
      entry: 'src/index.ts',
      template: 'build/vite/index.vite.html',
      inject: isProduction ? {} : {
        tags: [
          {
            injectTo: 'head-prepend',
            tag: 'base',
            attrs: {
              href: '/'
            }
          }
        ]
      }
    }) */
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
