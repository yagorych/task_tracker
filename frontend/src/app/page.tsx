import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  KanbanSquare,
  Layers3,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: KanbanSquare,
    title: 'Boards that stay in flow',
    description:
      'Shape every project around a visual workflow and move work forward with a single drag.',
  },
  {
    icon: UsersRound,
    title: 'Context for every task',
    description:
      'Keep comments, labels, attachments, and the people involved together in one clear place.',
  },
  {
    icon: Bell,
    title: 'A calmer way to stay updated',
    description:
      'Get notified about the work that needs your attention, without losing the bigger picture.',
  },
];

function PreviewTask({
  issueKey,
  title,
  priority,
  issueType,
  assignee,
  dueDate,
  labels,
  className,
}: {
  issueKey: string;
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  issueType: 'Task' | 'Bug' | 'Story' | 'Epic';
  assignee?: string;
  dueDate?: string;
  labels?: string[];
  className?: string;
}) {
  return (
    <article
      className={`rounded-xl border border-border bg-card p-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-input hover:shadow-md ${className ?? ''}`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="min-w-0 text-[10px] font-semibold text-muted-foreground">
          {issueKey}
        </span>
        <Badge
          variant={priority === 'High' ? 'destructive' : 'outline'}
          className={
            priority === 'Medium'
              ? 'h-4 border-amber-200 bg-amber-50 px-1.5 py-0 text-[9px] text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300'
              : 'h-4 px-1.5 py-0 text-[9px]'
          }
        >
          {priority}
        </Badge>
      </div>
      <p className="mt-2 text-[11px] leading-4 font-medium text-foreground">
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-1">
        <Badge variant="secondary" className="h-4 px-1.5 py-0 text-[9px]">
          {issueType}
        </Badge>
        {assignee && (
          <Badge variant="secondary" className="h-4 px-1.5 py-0 text-[9px]">
            {assignee}
          </Badge>
        )}
        {dueDate && (
          <Badge variant="secondary" className="h-4 px-1.5 py-0 text-[9px]">
            Due {dueDate}
          </Badge>
        )}
      </div>
      {labels && labels.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {labels.map((label) => (
            <Badge
              variant="secondary"
              className="h-4 px-1.5 py-0 text-[9px]"
              key={label}
            >
              {label}
            </Badge>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Home() {
  return (
    <main className="landing-page overflow-hidden">
      <section className="relative isolate">
        <div className="landing-orb landing-orb-one" aria-hidden="true" />
        <div className="landing-orb landing-orb-two" aria-hidden="true" />

        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(430px,1.1fr)] lg:px-12">
          <div className="relative z-10 max-w-2xl">
            <div className="landing-reveal flex items-center gap-2 text-sm font-semibold tracking-wide text-accent-foreground">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <Layers3 className="size-4" aria-hidden="true" />
              </span>
              Task Tracker
            </div>

            <div className="landing-reveal landing-delay-1 mt-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-accent-foreground">
                <Sparkles className="size-3.5" aria-hidden="true" />
                One focused workspace for your team
              </span>
            </div>

            <h1 className="landing-reveal landing-delay-2 mt-6 text-5xl font-semibold tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
              Plan work. Move tasks.{' '}
              <span className="text-primary">Ship with clarity.</span>
            </h1>

            <p className="landing-reveal landing-delay-3 mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Bring projects, tasks, conversations, and deadlines into one
              focused workspace your team will actually enjoy using.
            </p>

            <div className="landing-reveal landing-delay-4 mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                <Link href="/register">
                  Start for free
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#features">Explore features</a>
              </Button>
            </div>

            <div className="landing-reveal landing-delay-5 mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {['Projects and boards', 'Real-time updates', 'Files and comments'].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="flex size-4 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="landing-reveal landing-delay-3 relative z-10 mx-auto w-full max-w-2xl lg:justify-self-end">
            <div className="landing-float relative rounded-3xl border border-border/80 bg-card/85 p-3 shadow-2xl shadow-foreground/10 backdrop-blur sm:p-5">
              <div className="flex items-center justify-between border-b border-border/70 px-1 pb-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Product launch
                  </p>
                  <h2 className="mt-1 text-base font-semibold text-foreground">
                    Sprint planning
                  </h2>
                </div>
                <Badge variant="outline">Board</Badge>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                <section className="rounded-2xl bg-muted/70 p-2 sm:p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                      Backlog
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground">
                      3
                    </span>
                  </div>
                  <div className="space-y-2">
                    <PreviewTask
                      issueKey="SPR-12"
                      title="Research onboarding"
                      priority="Medium"
                      issueType="Story"
                      assignee="ava@example.com"
                      labels={['Design']}
                    />
                    <PreviewTask
                      issueKey="SPR-18"
                      title="Write release notes"
                      priority="Low"
                      issueType="Task"
                      dueDate="Nov 2"
                      labels={['Content']}
                      className="hidden sm:block"
                    />
                  </div>
                </section>

                <section className="rounded-2xl bg-primary/10 p-2 sm:p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-wide text-accent-foreground uppercase">
                      In progress
                    </span>
                    <span className="text-[10px] font-medium text-accent-foreground">
                      2
                    </span>
                  </div>
                  <div className="space-y-2">
                    <PreviewTask
                      issueKey="SPR-21"
                      title="Build activity timeline"
                      priority="High"
                      issueType="Task"
                      assignee="maya@example.com"
                      dueDate="Oct 30"
                      labels={['Frontend']}
                    />
                    <PreviewTask
                      issueKey="SPR-24"
                      title="Review new dashboard"
                      priority="Medium"
                      issueType="Story"
                      assignee="joe@example.com"
                      labels={['Product']}
                      className="hidden sm:block"
                    />
                  </div>
                </section>

                <section className="rounded-2xl bg-muted/70 p-2 sm:p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                      Done
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground">
                      5
                    </span>
                  </div>
                  <div className="space-y-2">
                    <PreviewTask
                      issueKey="SPR-08"
                      title="Set project goals"
                      priority="Low"
                      issueType="Epic"
                      labels={['Planning']}
                    />
                  </div>
                </section>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative scroll-mt-6 border-y border-border/70 bg-card/50 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Made for momentum
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The tools to keep work moving, without adding more noise.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary transition duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 leading-7 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-background sm:px-12 sm:py-18">
            <div className="absolute -top-20 -right-12 size-64 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <CalendarDays className="size-7 text-primary" aria-hidden="true" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Give every project a clear next step.
              </h2>
              <p className="mt-4 text-lg leading-8 text-background/70">
                Create a workspace, invite your team, and turn plans into
                progress today.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/register">
                  Create your workspace
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
