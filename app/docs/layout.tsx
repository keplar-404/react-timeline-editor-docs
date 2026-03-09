import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { ChartGantt, Cpu } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()} 
    
   sidebar={{
        tabs: [
          {
            title: 'Timeline Editor',
            description: 'Introduction to Timeline Editor',
            url: '/docs/timeline-editor',
            icon: <ChartGantt size={"15px"}/>
          },
          {
            title: 'Engine',
            description: 'Explore the timeline engine API',
            url: '/docs/engine',
            icon: <Cpu size={"15px"}/>
          },
        ],
      }}
    
    >
      {children}
    </DocsLayout>
  );
}
