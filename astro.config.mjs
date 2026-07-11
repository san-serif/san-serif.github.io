import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://san-serif.github.io',
  base: '/', // Change this to '/your-repo-name' if it's not a primary domain
  integrations: [mdx(), sitemap()],
});