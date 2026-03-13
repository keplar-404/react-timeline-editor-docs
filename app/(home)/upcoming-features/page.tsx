import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Rocket, Zap, Layers, Scissors, Move, Sliders, Database, Cpu, Layout, Workflow } from 'lucide-react';
import { Roadmap, RoadmapPhase } from '@/components/roadmap';

const roadmapData: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Core Engine Evolution',
    status: 'released',
    description: 'Focus on performance stability, headless architecture, and standard editing tools.',
    features: [
      {
        title: 'Headless Engine Separation',
        description: 'Decoupling the calculation engine from React rendering for flexible integrations.',
        status: 'released',
        icon: Cpu,
      },
      {
        title: 'Standard Edit Tools',
        description: 'Selection, drag-and-drop, and multi-track management basics.',
        status: 'released',
        icon: Move,
      },
      {
        title: 'Precision Snapping',
        description: 'Grid and auxiliary line snapping for pixel-perfect alignment.',
        status: 'released',
        icon: Zap,
      },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Advanced Editing Pack',
    status: 'in-progress',
    description: 'Expanding the creative toolkit with professional editing features.',
    features: [
      {
        title: 'Dynamic Cut / Blade Tool',
        description: 'Advanced action splitting with real-time feedback and state management.',
        status: 'released',
        icon: Scissors,
      },
      {
        title: 'Cross-Track Drag & Ghost Previews',
        description: 'Seamless movement of blocks between different tracks with visual position hints.',
        status: 'in-progress',
        icon: Layers,
      },
      {
        title: 'Loop Zone Mocking',
        description: 'Interactive loop region management with handles and sync controls.',
        status: 'in-progress',
        icon: Rocket,
      },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Visual Polish & UX',
    status: 'planned',
    description: 'Focusing on the user experience and visual feedback systems.',
    features: [
      {
        title: 'Undo/Redo History Engine',
        description: 'Integrated state management for complex timeline operations.',
        status: 'planned',
        icon: Workflow,
      },
      {
        title: 'Keyframe Animation Support',
        description: 'Adding inner-block property animation and curve editing.',
        status: 'planned',
        icon: Sliders,
      },
      {
        title: 'Advanced Theming System',
        description: 'Complete CSS-variable based theming for all timeline elements.',
        status: 'planned',
        icon: Layout,
      },
    ],
  },
];

export default function UpcomingFeaturesPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-24 pb-12 px-6 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fd-border bg-fd-muted text-fd-muted-foreground text-xs font-semibold mb-6 uppercase tracking-wider">
          <Rocket className="w-3 h-3 text-fd-primary" />
          The Roadmap
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-fd-foreground mb-6 tracking-tight">
          Upcoming Features
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          See what we&apos;re building next for React Timeline Editor. Our goal is to create the most powerful, extensible, and high-performance timeline toolkit for the web.
        </p>
      </section>

      <Roadmap phases={roadmapData} />

      <footer className="py-20 text-center border-t border-fd-border mt-12 bg-fd-muted/30">
        <p className="text-sm text-fd-muted-foreground mb-4">
          Want to request a feature?
        </p>
        <a 
          href="https://github.com/keplar-404/react-timeline-editor/issues" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-fd-primary text-fd-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Open an Issue on GitHub
        </a>
      </footer>
    </main>
  );
}
