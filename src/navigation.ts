import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'About', href: '#about' },      // 纯锚点，滚动到首页分区
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' },
    {
      text: '🌐 Language',
      links: [
        { text: '한국어', href: getPermalink('/') },  // 默认语言（无前缀）
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
        { text: 'About', href: '#about' },
        { text: 'Projects', href: '#projects' },
        { text: 'Contact', href: '#contact' },
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
