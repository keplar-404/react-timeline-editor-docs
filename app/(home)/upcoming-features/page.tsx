import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Rocket, Zap, Layers, Scissors, Move, Sliders, Database, Cpu, Layout, Workflow } from 'lucide-react';
import { Roadmap, RoadmapPhase } from '@/components/roadmap';

const roadmapData: RoadmapPhase[] = [
  {
    phase: 'Phase 8',
    title: 'Modern Compiler Support',
    status: 'planned',
    description: 'Preparing the library for the future of React and high-performance compilation.',
    features: [
      {
        title: 'React 19 Compiler Compatibility',
        description: 'Optimizing hooks and component structures for the React 19 compiler.',
        status: 'planned',
        icon: Cpu,
      },
    ],
  },
  {
    phase: 'Phase 7',
    title: 'Stability & Bug Fixes',
    status: 'released',
    description: 'Refining the core logic for a smoother editing experience.',
    features: [
      {
        title: 'Timeline Loop Bug Fix',
        description: 'Resolved inconsistencies in loop-back behavior and handle dragging sync.',
        status: 'released',
        icon: Zap,
      },
    ],
  },
  {
    phase: 'Phase 6',
    title: 'Distribution',
    status: 'released',
    description: 'Making the project available to the global developer community.',
    features: [
      {
        title: 'NPM Publication',
        description: 'Official release of @keplar-404/react-timeline-editor on the npm registry.',
        status: 'released',
        icon: Rocket,
      },
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Enhanced UX Patterns',
    status: 'released',
    description: 'Further improvements to the editing workflow and visual feedback.',
    features: [
      {
        title: 'Extended Feature Set',
        description: 'Added various workflow enhancements and interaction polish.',
        status: 'released',
        icon: Layers,
      },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Workflow Improvements',
    status: 'released',
    description: 'Expanding the basic editing capabilities with user-requested features.',
    features: [
      {
        title: 'Additional Features',
        description: 'Implementation of several missing standard editing functions.',
        status: 'released',
        icon: Sliders,
      },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Quality Assurance',
    status: 'released',
    description: 'Cleaning up the codebase and squashing initial implementation bugs.',
    features: [
      {
        title: 'Bug Fix Sweep',
        description: 'Comprehensive fix for reported issues during early testing.',
        status: 'released',
        icon: Zap,
      },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Feature Implementation',
    status: 'released',
    description: 'Building out the main interactive features of the timeline editor.',
    features: [
      {
        title: 'Core Feature Expansion',
        description: 'Adding multi-track support, action customization, and basic snapping.',
        status: 'released',
        icon: Layers,
      },
    ],
  },
  {
    phase: 'Phase 1',
    title: 'The Foundation',
    status: 'released',
    description: 'Forked from the original unmaintained project to fix critical architecture issues and missing modern features.',
    features: [
      {
        title: 'Project Fork & Audit',
        description: 'Complete audit of the original codebase to identify performance bottlenecks.',
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
