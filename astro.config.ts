// astro.config.ts
import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  lazyImagesRehypePlugin,
} from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  /** ✅ 为 GitHub Pages 指定站点与 base（sitemap/OG/链接都会用到） */
  site: 'https://ahn2001hanyang.github.io',
  base: '/astro-portfolio/',
  trailingSlash: 'never',

  output: 'static',

  integrations: [
    tailwind({ applyBaseStyles: false }),

    /** ✅ Sitemap：为每个 URL 写入 lastmod，并提升首页优先级 */
    sitemap({
      serialize(item) {
        const now = new Date().toISOString();
        const isHome =
          item.url === 'https://ahn2001hanyang.github.io/astro-portfolio/' ||
          item.url.endsWith('/astro-portfolio/');
        return {
          ...item,
          changefreq: 'weekly',
          priority: isHome ? 1.0 : 0.7,
          lastmod: now,
        };
      },
    }),

    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({ config: './src/config.yaml' }),
  ],

  /** ✅ 远程图域名白名单（若以后用 <Image /> 处理远程图不会报错） */
  image: {
    domains: [
      'cdn.pixabay.com',
      'opengraph.githubassets.com',
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com',
      'img.shields.io',
    ],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
