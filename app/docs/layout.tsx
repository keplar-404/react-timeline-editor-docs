import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()} 
    
   sidebar={{
        tabs: [
          {
            title: 'Timeline Editor',
            description: 'Introduction to Timeline Editor',
            url: '/docs/timeline-editor',
          },
          {
            title: 'Components',
            description: 'Explore the available components',
            url: '/docs/components',
          },
        ],
      }}
    
    >
      {children}
    </DocsLayout>
  );
}
