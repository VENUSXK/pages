import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { remarkMdxMermaid, remarkCodeTab } from 'fumadocs-core/mdx-plugins';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkCodeTabOptions: {
      parseMdx: true,
    },
    // MDX options
    remarkPlugins: [
      remarkMdxMermaid,
      [remarkCodeTab, { parseMdx: true }],
      remarkMath,
    ],
    // Place it at first, it should be executed before the syntax highlighter
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
