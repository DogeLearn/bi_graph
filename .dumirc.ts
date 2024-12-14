import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  locales: [
    {
      id: 'zh-CN',
      name: '中文',
    },
  ],
  themeConfig: {
    name: 'BIGraph',
    prefersColor: {
      default: 'auto',
      switch: true,
    },
  },
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: 'src/components',
      },
    ],
  },
});
