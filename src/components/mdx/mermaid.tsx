import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { renderMermaidSVG, THEMES } from 'beautiful-mermaid'
import { ScrollToCenter } from './mermaid-scroll';

export async function Mermaid({ chart }: { chart: string }) {
  try {
    const svg = renderMermaidSVG(chart, {
        bg: 'var(--color-fd-background)',
        fg: 'var(--color-fd-foreground)',
        interactive: true,
        transparent: true,
        line: 'var(--color-fd-border)',           // Edge/connector color
        accent: 'var(--color-fd-accent-foreground)',  // Arrow heads, highlights
        muted: 'var(--color-fd-muted-foreground)',   // Secondary text, labels
        surface: 'var(--color-fd-muted)',            // Node fill tint
        border: 'var(--color-fd-border)',            // Node stroke
    });

    return (
      <ScrollToCenter>
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      </ScrollToCenter>
    );
  } catch {
    return (
      <CodeBlock title="Mermaid">
        <Pre>{chart}</Pre>
      </CodeBlock>
    );
  }
}