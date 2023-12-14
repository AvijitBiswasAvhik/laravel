import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/sass/app.scss", "resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
    ],
    jsx: 'React.createElement', // Only add this line if you are using an older version of React
    server: {
        port: 3000,
    },
});
