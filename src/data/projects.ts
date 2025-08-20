// src/data/projects.ts
export type Project = {
  title: string;
  summary: string;
  tags?: string[];
  links: { label: string; href: string; target?: string }[];
  featured?: boolean;   // 单页已不区分，但保留字段以便将来需要
  icon?: string;        // 备选：没有封面时使用的图标（tabler 图标名）
  cover?: string;       // 选填：封面图路径（如 "~/assets/images/treasurepos.png"）
  repo?: string;        // 选填：GitHub 仓库 "owner/name" ，用于 Stars 徽章
};

export const projects: Project[] = [
  {
    title: 'TreasurePOS — Open-source POS',
    summary: '小型商户开源收银/进销存工具（GitHub 仓库）。',
    tags: ['POS', 'Desktop', 'Open Source'],
    links: [
      { label: 'GitHub', href: 'https://github.com/AHN2001hanyang/TreasurePOS', target: '_blank' },
    ],
    featured: true,
    icon: 'tabler:cash-register',
    cover: '~/assets/images/treasurepos.png',   // 可先不放图；放图后会自动显示封面
    repo: 'AHN2001hanyang/TreasurePOS',
  },

  // 以后新增项目：复制下面模板粘贴到此数组末尾
  // {
  //   title: '项目名称',
  //   summary: '一句话简介……',
  //   tags: ['Tag1', 'Tag2'],
  //   links: [
  //     { label: 'GitHub', href: 'https://github.com/owner/repo', target: '_blank' },
  //     { label: 'Demo', href: 'https://example.com', target: '_blank' },
  //   ],
  //   icon: 'tabler:rocket',
  //   cover: '~/assets/images/myproject.png',
  //   repo: 'owner/repo',
  // },
];
