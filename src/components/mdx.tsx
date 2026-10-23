import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

import { OssImage } from '@/components/posts-image';
import { ImageComparison } from '@/components/posts-image-comparison';
import { ImageSequenceSlider } from '@/components/posts-image-sequence-slider';

import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { SiGoogledrive, SiOpengl, SiGithub, SiArxiv, SiAcm } from "react-icons/si";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";

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
    SiGoogledrive, SiOpengl, SiGithub, SiArxiv, SiAcm,
    Accordion, Accordions,
    ...TabsComponents,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}

