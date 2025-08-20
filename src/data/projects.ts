// src/data/projects.ts

// 如需使用本地封面图，请先放一张图片到 src/assets/images/treasurepos.png
// 然后取消下一行注释，并把下面项目对象里的 cover 改成 treasureCover.src
// import treasureCover from '~/assets/images/treasurepos.png';

export type Project = {
  title: string;
  summary: string;
  tags?: string[];
  links: { label: string; href: string; target?: string }[];
  featured?: boolean;   // 单页已不区分，但保留字段以便将来需要
  icon?: string;        // 没有封面时使用的图标（tabler 图标名）
  cover?: string;       // 封面图（建议：远程 URL 或本地 import 的 .src）
  repo?: string;        // GitHub 仓库 "owner/name" ，用于 Stars 徽章
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
    // ✅ 默认使用 GitHub 的 OpenGraph 预览图，避免本地路径 404
    cover: 'https://opengraph.githubassets.com/1/AHN2001hanyang/TreasurePOS',
    // 如果要改用本地图片，请改为：cover: treasureCover.src,
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
  //   // 封面方案一：远程图（最省心）
  //   cover: 'https://opengraph.githubassets.com/1/owner/repo',
  //   // 封面方案二：本地图
  //   // import myCover from '~/assets/images/myproject.png';
  //   // cover: myCover.src,
  //   repo: 'owner/repo',
  // },
];
