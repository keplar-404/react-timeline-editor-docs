import Link from 'next/link';
import { Github, ArrowRight, Layers, Zap, Scissors, Move, Sliders, Rocket } from 'lucide-react';

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
    <main className="flex flex-col items-center w-full">
      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-20 w-full max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fd-border bg-fd-muted text-fd-muted-foreground text-xs font-medium mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          Open Source · MIT License
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-fd-foreground leading-tight mb-3">
          React Timeline Editor
          <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-fd-primary/10 text-fd-primary border border-fd-primary/20 align-middle">
            Alpha
          </span>
        </h1>

        <div className="mb-10">
          <Link href="/upcoming-features" className="text-sm text-fd-muted-foreground hover:text-fd-primary transition-colors flex items-center justify-center gap-1">
            <Rocket className="w-3.5 h-3.5" />
            See what's coming in the Roadmap
          </Link>
        </div>

        <p className="text-lg text-fd-muted-foreground max-w-xl leading-relaxed mb-10">
          A powerful, high-performance component library for building timeline animation and video editors in React. Precise, extensible, and battle-tested.
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Link
            href="/docs/timeline-editor"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-fd-primary text-fd-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com/keplar-404/react-timeline-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-fd-border bg-fd-background text-fd-foreground text-sm font-medium hover:bg-fd-muted transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </section>

      {/* Preview */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-20">
        <div className="rounded-xl border border-fd-border overflow-hidden bg-fd-muted/40">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-fd-border bg-fd-muted/60">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <div className="w-full overflow-hidden">
            <img
              src="/assets/timeline.gif"
              alt="React Timeline Editor preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="w-full max-w-3xl mx-auto px-6 pb-20">
        <div className="rounded-xl border border-fd-border bg-fd-card p-6">
          <p className="text-xs text-fd-muted-foreground font-medium uppercase tracking-widest mb-3">Installation</p>
          <pre className="text-sm font-mono text-fd-foreground overflow-x-auto">
            <span className="text-fd-muted-foreground select-none">$ </span>
            npm install @keplar-404/react-timeline-editor @keplar-404/timeline-engine
          </pre>
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-28">
        <h2 className="text-2xl font-semibold text-fd-foreground text-center mb-12 tracking-tight">
          Everything you need
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-fd-border bg-fd-card p-5 flex flex-col gap-3 hover:border-fd-primary/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-fd-muted flex items-center justify-center">
                <feature.icon className="w-4 h-4 text-fd-foreground" />
              </div>
              <h3 className="text-sm font-semibold text-fd-foreground">{feature.title}</h3>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
          {/* CTA card */}
          <div className="rounded-xl border border-fd-border bg-fd-muted/30 p-5 flex flex-col justify-between gap-4 hover:border-fd-primary/40 transition-colors">
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              Ready to build your own timeline editor?
            </p>
            <Link
              href="/docs/timeline-editor/getting-started/installation"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fd-primary hover:underline"
            >
              Read the docs <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
