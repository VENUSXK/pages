import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import Image from 'next/image';


export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: 'J1N9H3',
    },
    searchToggle: {
      enabled: false
    },
    themeSwitch: {
      enabled: true
    },
    githubUrl: `https://github.com/j1n9h3`,
  };
}
