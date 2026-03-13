import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'keplar-404',
  repo: 'react-timeline-editor-docs',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
          <span className="font-bold tracking-tight">react-timeline-editor</span>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
