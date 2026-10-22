import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: 'VENUSXK',
		},
		searchToggle: {
			enabled: false,
		},
		themeSwitch: {
			enabled: true,
		},
		githubUrl: 'https://github.com/venusxk',
	};
}
