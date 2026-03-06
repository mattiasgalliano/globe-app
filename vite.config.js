import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// Replace "globe-app" with your repo name
export default defineConfig({
  plugins: [react()],
  base: "/globe-app/",  // GitHub Pages subpath
})