import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const basePath = process.env.PAGES_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const config = {
	output: 'export',
	basePath,
	trailingSlash: true,
	reactStrictMode: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'j1n9h3.oss-cn-hangzhou.aliyuncs.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default withMDX(config);
