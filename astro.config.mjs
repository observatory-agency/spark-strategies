import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import image from '@astrojs/image';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv(import.meta.env.MODE, process.cwd(), 'STORYBLOK');

export default defineConfig({
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
                Blog: 'storyblok/Blog',
                Author: 'storyblok/Author',
                blogPostList: 'storyblok/BlogPostList',
                page: 'storyblok/Page',
            },
        }),
    ],
});
