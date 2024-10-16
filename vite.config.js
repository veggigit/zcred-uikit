import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        minify: true, // Minificación CSS activada por defecto en modo producción
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            // input: './css/main.css',
            output: {
                assetFileNames: (assetInfo) => {
                    // Verifica si es un archivo CSS y asigna el nombre personalizado
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'css/zcred-uikit_min.css'; // IMPORTANTE, ya en producción
                    }
                    return assetInfo.name; // Mantén el nombre original para otros activos
                },
            },
        },
    },
});
