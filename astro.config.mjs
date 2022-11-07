import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import image from '@astrojs/image';
import storyblok from '@storyblok/astro';

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        svelte(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
        storyblok({
            accessToken: '4UrbyMFHLg5o1FKV9ylQzwtt',
            components: {
                page: 'storyblok/Page',
                blogpost: 'storyblok/Blog',
                postList: 'storyblok/PostList',
            },
        }),
    ],
});
