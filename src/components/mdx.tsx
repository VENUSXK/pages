import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

import { OssImage } from '@/components/posts-image';
import { ImageComparison } from '@/components/posts-image-comparison';
import { ImageSequenceSlider } from '@/components/posts-image-sequence-slider';

import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { SiOpengl, SiGithub, SiArxiv, SiAcm } from "react-icons/si";

import { Mermaid } from '@/components/mdx/mermaid';

import * as TabsComponents from 'fumadocs-ui/components/tabs';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    OssImage,
    ImageComparison,
    ImageSequenceSlider,
    GithubInfo, 
    Mermaid,
    SiOpengl, SiGithub, SiArxiv, SiAcm,
    ...TabsComponents,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}

