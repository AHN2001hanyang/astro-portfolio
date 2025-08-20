import ko from './ko';
import zh from './zh';
import en from './en';

const dict: Record<string, any> = { ko, zh, en };

/** 获取词典；未知语言优先回退到 ko */
export function t(locale: string) {
  return dict[locale] ?? dict['ko'];
}
