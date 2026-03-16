"use client";

import Link from 'next/link';
import { Github, ArrowRight, Layers, Copy, Zap, Scissors, Move, Sliders, Rocket } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'High-Performance Rendering',
    description: 'Handles thousands of action blocks with smooth, scalable rendering and precision zoom/snap controls.',
  },
  {
    icon: Move,
    title: 'Row Drag & Sort',
    description: 'Natively drag and reorder entire track rows vertically, or move action blocks across tracks with ghost previews.',
  },
  {
    icon: Scissors,
    title: 'Blade / Cut Tool',
    description: 'Built-in blade mechanism to dynamically slice and split timeline actions at any point.',
  },
  {
    icon: Sliders,
    title: 'Transport Controls',
    description: 'Pre-built UI components for Play, Pause, Seek, and Loop regions — ready to drop in.',
  },
  {
    icon: Zap,
    title: 'Headless Engine',
    description: 'The engine logic is cleanly separated from React DOM, allowing headless use in any environment.',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-fd-background relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="mesh-glow" />
      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-32 pb-24 w-full max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fd-border bg-fd-muted/50 backdrop-blur-sm text-fd-muted-foreground text-[10px] font-bold mb-8 tracking-[0.2em] uppercase transition-all hover:border-fd-primary/30">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          Open Source · MIT License
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 gradient-heading italic">
          React Timeline Editor
          <span className="ml-4 not-italic inline-flex items-center px-3 py-0.5 rounded-full text-[10px] font-black bg-fd-primary/10 text-fd-primary border border-fd-primary/20 align-middle shadow-sm tracking-[0.3em] pl-[0.4em]">
            ALPHA
          </span>
        </h1>

        <div className="mb-12">
          <Link href="/upcoming-features" className="text-sm text-fd-muted-foreground hover:text-fd-primary transition-all flex items-center justify-center gap-2 group">
            <Rocket className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="border-b border-transparent group-hover:border-fd-primary/40">Discover the Future Roadmap</span>
            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </Link>
        </div>

        <p className="text-xl text-fd-muted-foreground max-w-2xl leading-relaxed mb-4 font-medium">
          A high-performance component library for building professional timeline animation and video editors in React.
        </p>
        <div className="flex flex-col items-center gap-1 mb-16">
          <a href="https://github.com/xzdarcy/react-timeline-editor" target="_blank" rel="noopener noreferrer" className="text-xs text-fd-muted-foreground/60 hover:text-fd-primary transition-colors flex items-center justify-center gap-1">
            <Layers className="w-3 h-3" />
            Forked with ❤️ from xzdarcy/react-timeline-editor
          </a>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link
            href="/docs/timeline-editor"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-fd-primary text-fd-primary-foreground text-base font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(59,130,246,0.2)] dark:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          >
            Get Started
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://github.com/keplar-404/react-timeline-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-fd-border bg-fd-background/50 backdrop-blur-md text-fd-foreground text-base font-bold transition-all hover:bg-fd-muted hover:border-fd-primary/30"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </section>

      {/* Preview */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-32 relative z-10">
        <div className="rounded-2xl border border-fd-border/50 overflow-hidden glass-card shadow-2xl group transition-all hover:border-fd-primary/20">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-fd-border/50 bg-fd-muted/30">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/50" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <span className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="ml-4 flex-1">
              <div className="bg-fd-background/80 dark:bg-fd-background/50 border border-fd-border/50 rounded-md h-6 w-full max-w-md mx-auto flex items-center px-3 text-[10px] text-fd-muted-foreground font-mono">
                https://react-timeline-editor.keplar.dev/preview
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="/assets/timeline.gif"
              alt="React Timeline Editor preview"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="w-full max-w-4xl mx-auto px-6 pb-24 relative z-10">
        <div className="rounded-2xl border border-fd-border/50 glass-card p-1">
          <div className="bg-fd-background/40 rounded-[calc(1rem-4px)] p-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[10px] text-fd-muted-foreground font-black uppercase tracking-[0.3em]">Quick Start</p>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-fd-primary/20" />
                <span className="w-2 h-2 rounded-full bg-fd-primary/40" />
                <span className="w-2 h-2 rounded-full bg-fd-primary/60" />
              </div>
            </div>
            <div className="relative group">
              <pre className="text-lg md:text-xl font-mono text-fd-foreground overflow-x-auto py-4 px-6 rounded-xl bg-fd-muted/50 dark:bg-black/20 border border-fd-border/50 shadow-inner">
                <span className="text-fd-primary/50 select-none mr-4">$</span>
                <span className="text-fd-primary font-bold">npm install</span> <span className="text-fd-foreground/80">@keplar-404/react-timeline-editor</span>
              </pre>
              <button 
                onClick={() => navigator.clipboard.writeText("npm install @keplar-404/react-timeline-editor @keplar-404/timeline-engine")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-fd-muted/50 opacity-0 group-hover:opacity-100 transition-all hover:bg-fd-primary/20 hover:text-fd-primary border border-transparent hover:border-fd-primary/30"
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-32 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-fd-foreground tracking-tight mb-4 gradient-heading">
            Powerful features, professional grade
          </h2>
          <p className="text-fd-muted-foreground max-w-xl mx-auto">
            Everything you need to build a studio-quality timeline editor in React.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-fd-border/50 bg-fd-card/30 p-8 flex flex-col gap-5 glass-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-fd-primary/10 flex items-center justify-center border border-fd-primary/20">
                <feature.icon className="w-6 h-6 text-fd-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-fd-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-fd-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
          
          <div className="rounded-2xl border border-dashed border-fd-border/80 bg-fd-muted/20 dark:bg-fd-muted/10 p-8 flex flex-col justify-between items-center text-center gap-6 group hover:border-fd-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-fd-muted flex items-center justify-center border border-fd-border transition-transform group-hover:scale-110 shadow-sm">
              <Rocket className="w-6 h-6 text-fd-muted-foreground group-hover:text-fd-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-fd-foreground">Ready to start?</h3>
              <p className="text-sm text-fd-muted-foreground">
                Join others building the next generation of creative tools.
              </p>
            </div>
            <Link
              href="/docs/timeline-editor/getting-started/installation"
              className="inline-flex items-center gap-2 text-sm font-black text-fd-primary hover:text-fd-primary/80 transition-colors uppercase tracking-widest px-6 py-3 rounded-xl bg-fd-primary/5 dark:bg-fd-primary/10 border border-fd-primary/20"
            >
              Read Docs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
