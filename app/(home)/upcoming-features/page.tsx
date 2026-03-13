import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Rocket, Zap, Layers, Scissors, Move, Sliders, Database, Cpu, Layout, Workflow } from 'lucide-react';
import { Roadmap, RoadmapPhase } from '@/components/roadmap';

const roadmapData: RoadmapPhase[] = [
  {
    phase: 'Phase 8',
    title: 'Future Proofing',
    status: 'planned',
    description: 'Preparing the library for the next generation of React and performance optimizations.',
    features: [
      {
        title: 'React 19 Compiler Compatibility',
        description: 'Optimizing codebase for the upcoming React 19 compiler for zero-cost reactivity.',
        status: 'planned',
        icon: Cpu,
      },
    ],
  },
  {
    phase: 'Phase 7',
    title: 'Stability & Bug Squashing',
    status: 'released',
    description: 'Refining the core logic and resolving edge cases in complex interactions.',
    features: [
      {
        title: 'Timeline Loop Stability',
        description: 'Fixed critical bugs in the timeline loop back logic and handle dragging synchronization.',
        status: 'released',
        icon: Zap,
      },
      {
        title: 'CSS Import Resolution',
        description: 'Fixed package import issues to ensure styles load correctly in all build environments.',
        status: 'released',
        icon: Layout,
      },
    ],
  },
  {
    phase: 'Phase 6',
    title: 'Distribution & Ecosystem',
    status: 'released',
    description: 'Official release and preparation for public consumption.',
    features: [
      {
        title: 'NPM Publication',
        description: 'Official release to the npm registry for easy integration into React projects.',
        status: 'released',
        icon: Rocket,
      },
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Visual Excellence',
    status: 'released',
    description: 'Enhancing the feedback system and visual clarity of the editor.',
    features: [
      {
        title: 'Block & Custom Previews',
        description: 'Added support for detailed block previews and fully custom action rendering.',
        status: 'released',
        icon: Layers,
      },
      {
        title: 'Loop Area Highlighting',
        description: 'Implemented visual overlays and handles for designated loop regions.',
        status: 'released',
        icon: Rocket,
      },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Precision Editing',
    status: 'released',
    description: 'Tools for fine-grained control and professional editing workflows.',
    features: [
      {
        title: 'Blade / Cut Mechanism',
        description: 'Advanced action splitting with dedicated key strokes (Hold C) and custom cursors.',
        status: 'released',
        icon: Scissors,
      },
      {
        title: 'Transport Bar Controls',
        description: 'Pre-built component for Play, Pause, Seek, and Loop state management.',
        status: 'released',
        icon: Sliders,
      },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Core Interaction Engine',
    status: 'released',
    description: 'Stabilizing the fundamental movement and placement logic.',
    features: [
      {
        title: 'Block & Row Drag-and-Drop',
        description: 'Natively handle moving blocks across tracks and reordering entire rows.',
        status: 'released',
        icon: Move,
      },
      {
        title: 'Smart Grid Snapping',
        description: 'High-performance snapping system for alignment and time precision.',
        status: 'released',
        icon: Zap,
      },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Modern Infrastructure',
    status: 'released',
    description: 'Upgrading the development environment for speed and maintainability.',
    features: [
      {
        title: 'Bun Ecosystem Migration',
        description: 'Replaced Yarn with Bun for lightning-fast installs and project compilation.',
        status: 'released',
        icon: Zap,
      },
      {
        title: 'Pure CSS Architecture',
        description: 'Completely removed LESS from the project in favor of optimized Vanilla CSS.',
        status: 'released',
        icon: Layout,
      },
    ],
  },
  {
    phase: 'Phase 1',
    title: 'The Rebirth',
    status: 'released',
    description: 'Forked the original unmaintained project to build a modernized, feature-rich timeline editor.',
    features: [
      {
        title: 'Project Audit & Fork',
        description: 'Rescued the core engine and identified key areas for modernization.',
        status: 'released',
        icon: Move,
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
