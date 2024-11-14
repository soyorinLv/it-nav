export default defineConfig({
  base: "/it-nav/",  // 替换为你的仓库名称或部署子路径
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [vue(), visualizer()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

