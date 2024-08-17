import path from "path";
import react from "@vitejs/plugin-react"; // Import the React plugin from Vite
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()], // Use the React plugin to handle JSX and React transformations
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Create an alias for easy imports from the src directory
    },
  },
  base: "./", // This setting might be necessary if deploying to a non-root path
});
