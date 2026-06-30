import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This file just tells Vite (our build tool) that we are using React.
export default defineConfig({
  plugins: [react()],
});
