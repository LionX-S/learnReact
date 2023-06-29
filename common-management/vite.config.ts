import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 需要安装path声明文件 npm i -D @types/node,否则报红
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置别名
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }
})
