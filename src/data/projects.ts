// src/data/projects.ts
export type Project = {
  title: string;
  summary: string;
  tags?: string[];
  links: { label: string; href: string; target?: string }[];
  featured?: boolean; // 设为 true 就会出现在首页
  icon?: string;      // 选填：Tabler 图标名，例如 "tabler:files"
  cover?: string;     // 选填：封面图路径
};

export const projects: Project[] = [
  {
    title: 'TreasurePOS — Open-source POS',
    summary:
      '小型商户的开源收银/进销存工具（GitHub 仓库）。',
    tags: ['POS', 'Desktop', 'Open Source'],
    links: [
      { label: 'GitHub', href: 'https://github.com/AHN2001hanyang/TreasurePOS', target: '_blank' },
    ],
    featured: true,
    icon: 'tabler:cash-register',
  },
  // === 以后新增项目，按这个格式在下面追加即可 ===
  // {
  //   title: 'My Next Project',
  //   summary: '一句话简介……',
  //   tags: ['AI', 'Web'],
  //   links: [
  //     { label: 'GitHub', href: 'https://github.com/...' },
  //     { label: 'Demo', href: 'https://...' },
  //   ],
  //   featured: false, // 想上首页就改成 true
  //   icon: 'tabler:rocket',
  //   cover: '~/assets/images/xxx.png',
  // },
];
