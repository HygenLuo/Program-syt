import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入node提供内置模块path:可以获得绝对路径
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 将src文件夹路径别名设置为 @
      "@": path.resolve(__dirname, 'src')
    }
  }
})