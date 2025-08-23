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
  /** ✅ 用户主页：根域名 + 根路径 */
  site: 'https://ahn2001hanyang.github.io',
  base: '/',                 // ← 从 /astro-portfolio/ 改为根路径
  trailingSlash: 'never',

  output: 'static',

  integrations: [
    tailwind({ applyBaseStyles: false }),

    /** ✅ Sitemap：为每个 URL 写入 lastmod，并提升首页优先级 */
    sitemap({
      serialize(item) {
        const now = new Date().toISOString();
        const isHome =
          item.url === 'https://ahn2001hanyang.github.io/' ||
          item.url === 'https://ahn2001hanyang.github.io';
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

  /** ✅ 远程图域名白名单 */
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
