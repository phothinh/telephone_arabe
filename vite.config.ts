import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest:{
        "theme_color": "#f69435",
        "background_color": "#f69435",
        "display": "browser",
        "scope": "/",
        "start_url": "/",
        "name": "telephone_arabe",
        "short_name": "tel_arabe",
        "icons": [
            {
                "src": "/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/icon-256x256.png",
                "sizes": "256x256",
                "type": "image/png"
            },
            {
                "src": "/icon-384x384.png",
                "sizes": "384x384",
                "type": "image/png"
            },
            {
                "src": "/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    }
    })
  ],
})
