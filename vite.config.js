import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build`        -> normal multi-asset build in dist/
// `SINGLE_FILE=1 npm run build` -> one self-contained index.html (used for hosted previews)
export default defineConfig(() => ({
  plugins: [react(), ...(process.env.SINGLE_FILE ? [viteSingleFile()] : [])],
  base: './',
}))
