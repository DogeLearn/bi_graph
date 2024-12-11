import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/bi_graph/',
  publicPath: '/bi_graph/',
  outputPath: 'docs-dist',
  locales: [
    {
      id: 'zh-CN',
      name: '中文',
    },
  ],
  themeConfig: {
    name: 'Bi-graph',
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
