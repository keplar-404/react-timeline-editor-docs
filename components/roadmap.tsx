import React from 'react';
import { CheckCircle2, Circle, Clock, Rocket, Zap, Sliders, Scissors, Move, Layers } from 'lucide-react';

export type Status = 'released' | 'in-progress' | 'planned';

export interface RoadmapFeature {
  title: string;
  description: string;
  status: Status;
  icon?: React.ElementType;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  status: Status;
  date?: string;
  features: RoadmapFeature[];
}

const statusConfig = {
  released: {
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    icon: CheckCircle2,
    label: 'Released',
  },
  'in-progress': {
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    icon: Clock,
    label: 'In Progress',
  },
  planned: {
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    icon: Circle,
    label: 'Planned',
  },
};

export function Roadmap({ phases }: { phases: RoadmapPhase[] }) {
  return (
    <div className="relative max-w-4xl mx-auto px-6 py-12">
      {/* Vertical Line */}
      <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-fd-border -translate-x-1/2" />

      <div className="space-y-24">
        {phases.map((phase, phaseIndex) => {
          const isEven = phaseIndex % 2 === 0;
          const status = statusConfig[phase.status];

          return (
            <div key={phase.phase} className="relative">
              {/* Dot on timeline */}
              <div className="absolute left-[31px] md:left-1/2 top-0 -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full border-4 border-fd-background ${status.color.replace('text', 'bg')} ring-4 ring-fd-background`} />
              </div>

              <div className={`flex flex-col md:flex-row items-start gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Visual side (Empty on mobile, occupies half on desktop) */}
                <div className="hidden md:block flex-1" />

                {/* Content Side */}
                <div className={`flex-1 pl-12 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 border ${status.bgColor} ${status.color} ${status.borderColor}`}>
                    <status.icon className="w-3 h-3" />
                    {phase.phase} — {status.label}
                  </div>
                  
                  <h2 className="text-3xl font-bold text-fd-foreground mb-3 tracking-tight">
                    {phase.title}
                  </h2>
                  <p className="text-fd-muted-foreground mb-8 leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    {phase.features.map((feature) => (
                      <div 
                        key={feature.title}
                        className={`group p-5 rounded-2xl border border-fd-border bg-fd-card/50 hover:bg-fd-accent/10 transition-all duration-300 hover:scale-[1.02] ${!isEven ? 'text-left md:text-right' : 'text-left'}`}
                      >
                        <div className={`flex items-start gap-4 ${!isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                          {feature.icon && (
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-fd-muted flex items-center justify-center group-hover:bg-fd-primary/10 transition-colors">
                              <feature.icon className="w-5 h-5 text-fd-foreground group-hover:text-fd-primary transition-colors" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-fd-foreground mb-1">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-fd-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
