import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withMDX = createMDX();

const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // GitHub Pages project sites are served from /<repo>; CI passes PAGES_BASE_PATH.
  basePath: process.env.PAGES_BASE_PATH || undefined,
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
