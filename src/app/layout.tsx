import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import 'katex/dist/katex.css';

const inter = Inter({
	subsets: ['latin'],
});

const jetBrainsMono = localFont({
	src: '../../public/fonts/JetBrainsMono-Regular.woff2',
	variable: '--font-jetbrains-mono',
	display: 'swap',
});

export default function Layout({ children }: LayoutProps<'/'>) {
	return (
		<html
			lang="en"
			className={`${inter.className} ${jetBrainsMono.variable}`}
			suppressHydrationWarning
		>
			<body className="flex flex-col min-h-screen overflow-y-scroll">
				<RootProvider search={{ enabled: false }}>{children}</RootProvider>
			</body>
		</html>
	);
}
