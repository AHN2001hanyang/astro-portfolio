import ko from './ko.ts';
import zh from './zh.ts';
import en from './en.ts';

const dict = { ko, zh, en } as const;

/** 获取指定语言词典，未知语言回退到韩文 */
export function t(locale: keyof typeof dict | string) {
  return (dict as any)[locale] ?? dict.ko;
}
