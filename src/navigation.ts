import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Projects', href: getPermalink('/projects') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'Contact', href: 'mailto:jaehyung9483@gmail.com' },

    {
      text: '🌐 Language',
      links: [
        { text: '한국어', href: getPermalink('/') },
        { text: '中文', href: getPermalink('/zh/') },
        { text: 'English', href: getPermalink('/en/') },
      ],
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/AHN2001hanyang', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Projects', href: getPermalink('/projects') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: 'mailto:jaehyung9483@gmail.com' },
      ],
    },
    {
      title: 'Content',
      links: [
        { text: 'Categories', href: getPermalink('/category') },
        { text: 'Tags', href: getPermalink('/tag') },
        { text: 'RSS', href: getAsset('/rss.xml') },
      ],
    },
    {
      title: 'Language',
      links: [
        { text: '한국어', href: getPermalink('/') },
        { text: '中文', href: getPermalink('/zh/') },
        { text: 'English', href: getPermalink('/en/') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/AHN2001hanyang' },
  ],
  footNote: `© 2025 Jae AHN · Built with Astro & Tailwind · Deployed on GitHub Pages.`,
};
