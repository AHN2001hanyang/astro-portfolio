import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/#about') },
    { text: 'Projects', href: getPermalink('/#projects') },
    { text: 'Contact', href: getPermalink('/#contact') },
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
        { text: 'About', href: getPermalink('/#about') },
        { text: 'Projects', href: getPermalink('/#projects') },
        { text: 'Contact', href: getPermalink('/#contact') },
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
    {
      title: 'Feeds',
      links: [{ text: 'RSS', href: getAsset('/rss.xml') }],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/AHN2001hanyang' },
  ],
  footNote: `© 2025 Jae AHN · One-Page Portfolio`,
};
