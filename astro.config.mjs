import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import image from '@astrojs/image';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';
const env = loadEnv(import.meta.env.MODE, process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
    site: 'https://sparkstrategies.co/',
    integrations: [
        tailwind(),
        svelte(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
        storyblok({
            accessToken:
                import.meta.env.MODE === 'development'
                    ? env.STORYBLOK_PREVIEW_TOKEN
                    : env.STORYBLOK_PUBLIC_TOKEN,
            components: {
                BlogPost: 'storyblok/BlogPost',
                Author: 'storyblok/Author',
                page: 'storyblok/Page',
            },
        }),
        sitemap(),
    ],
});
