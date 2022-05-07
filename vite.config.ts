import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import postCssPxToRem from 'postcss-pxtorem'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:3002/',
        target: 'http://118.178.240.175:3000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    PkgConfig(),
    OptimizationPersist()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    }
  },
  // Vite自身已经集成PostCSS，无需再次安装。另外也无需单独创建PostCSS配置文件，已集成到vite.config.js的css选项中
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 192, //  (Number | Function) Represents the root element font size or returns the root element font. 设计稿尺寸 / 10 eg: 1920 / 10
          // (Array) The properties that can change from px to rem.
          // Values need to be exact matches.
          // Use wildcard * to enable all properties. Example: ['*']
          // Use * at the start or end of a word. (['*position*'] will match background-position-y)
          // Use ! to not match a property. Example: ['*', '!letter-spacing']
          // Combine the "not" prefix with the other prefixes. Example: ['*', '!font*']
          propList: ['*'], // eg: ['font', 'font-size', 'line-height', 'letter-spacing']
          replace: false, // (Boolean) Replaces rules containing rems instead of adding fallbacks. false在样式中只显示转化的rem单位; true 原来设置的px和现在的rem都显示
          mediaQuery: false, // (Boolean) Allow px to be converted in media queries. 允许在媒体查询中转换px。
          minPixelValue: 12, // Set the minimum pixel value to replace. 最小px值才能被rem转化
          // selectorBlackList: ['test'], //(Array) The selectors to ignore and leave as px 包含test字符的样式不会转成rem; 只是当前类不会转化rem，如果一个元素有多个类，其他类还是会转化rem
          // exclude: /node_modules/i // 排除不需要转换rem的文件
          // unitPrecision: 7, // 单位保留x位小数点
        })
      ]
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'repl': ['repl']
        }
      }
    }
  }

})