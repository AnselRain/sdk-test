import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";
import { resolve } from 'path'
import path from "path";
export default defineConfig({
    alias: {
        "@": path.resolve(__dirname, "src")
    },
    base: "/",
    plugins: [
        // vue()
        createVuePlugin()
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.js'),
            name: 'MyLib',
            // the proper extensions will be added
            fileName: 'my-lib'
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});
