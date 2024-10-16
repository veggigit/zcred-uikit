import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        minify: true, // Esta opción está habilitada por defecto en modo producción.
    },
    build: {
        // Opcional: Configura la salida si quieres cambiar la ubicación o nombre del archivo
        outDir: 'dist',
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    // Comprueba el nombre real del archivo CSS
                    if (assetInfo.name.endsWith('.css')) {
                        return 'css/zcred-uikit_min.css'; // Cambia el nombre aquí
                    }
                    return assetInfo.name; // Mantiene el nombre original para otros archivos
                },
            }
        },
    },
});
