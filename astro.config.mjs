// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://electroteam.org',
  build: {
    // relativne putanje rade i na cPanel hostingu bez posebne konfiguracije
    assets: 'assets',
  },
});
